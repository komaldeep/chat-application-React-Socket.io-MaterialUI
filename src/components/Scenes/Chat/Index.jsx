import React, {Component} from "react";
import Notification  from 'react-web-notification';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import io from 'socket.io-client';
import NavigationHeader from './../../AppComponent/NavigationHeader';
import ChatText from './Widgits/ChatText';
import Chatfooter from './Widgits/Chatfooter';
import {Card} from 'material-ui/Card';
import Modal from 'react-modal';


export default class Chatconatiner extends Component{

    constructor (props) {
        super(props)
        this.state = {
            messages: [],
            ignore: true,
            title: ''
        }
    }

    componentDidMount () {
        this.socket = io('/');
        this.socket.on('message', message => {
            this.setState({ messages: [...this.state.messages , message] })
            this.handleButtonClick(message);
        })

    }

    // For sending message by clicking enter
    enter_Submit(event) {
        const body = event.target.value
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me'
            }

            this.setState({ messages: [...this.state.messages , message ]})
            this.socket.emit('message', body)
        }
    }

    // For sending message by clicking send button
    sent_Submit(Message) {
        const body = Message;
        if (body != '') {
            const message = {
                body,
                from: ' Me '
            }
            this.setState({ messages: [...this.state.messages , message ]})
            this.socket.emit('message', body)
        }
    }



    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
            ignore: false
        });
    }
    handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
            ignore: true
        });
    }
    handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
            ignore: true
        });
    }

    handleNotificationOnClick(e, tag){
        console.log(e, 'Notification clicked tag:' + tag);
    }

    handleNotificationOnError(e, tag){
        console.log(e, 'Notification error tag:' + tag);
    }

    handleNotificationOnClose(e, tag){
        console.log(e, 'Notification closed tag:' + tag);
    }

    handleNotificationOnShow(e, tag){
        this.playSound();
        console.log(e, 'Notification shown tag:' + tag);
    }

    playSound(filename){
        document.getElementById('sound').play();
    }

    handleButtonClick(message) {

        if(this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = 'Chat Now (New Message Received)';
        const body = message.body;
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';

        const options = {
            tag: tag,
            body: body,
            icon: icon,
            lang: 'en',
            dir: 'ltr',
        }
        this.setState({
            title: title,
            options: options
        });
    }


    render(){

        const style = {
            height:"550px",
            maxHeight:"550px",
            overflowY:"auto",
        };


        return(
            <div>
                <NavigationHeader />

                <Notification
                    ignore={this.state.ignore && this.state.title !== ''}
                    notSupported={this.handleNotSupported.bind(this)}
                    onPermissionGranted={this.handlePermissionGranted.bind(this)}
                    onPermissionDenied={this.handlePermissionDenied.bind(this)}
                    onShow={this.handleNotificationOnShow.bind(this)}
                    onClick={this.handleNotificationOnClick.bind(this)}
                    onClose={this.handleNotificationOnClose.bind(this)}
                    onError={this.handleNotificationOnError.bind(this)}
                    timeout={5000}
                    title={this.state.title}
                    options={this.state.options}
                />



                    <Card
                        style={style} >
                        {
                            this.state.messages.map((messages, i) => {
                                return ( <ChatText key={i} chat_messages = {messages} /> )
                            })
                        }
                    </Card>

                <Chatfooter
                    submitmessage={this.enter_Submit.bind(this)}
                    send_button_submit = {this.sent_Submit.bind(this)}
                />
            </div>
        );
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: getMuiTheme(baseTheme)
        }
    }
}