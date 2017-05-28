import React, {Component} from "react";
// import {Link} from "react-router";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import io from 'socket.io-client';
import NavigationHeader from './../../AppComponent/NavigationHeader';
import ChatText from './Widgits/ChatText';
import Chatfooter from './Widgits/Chatfooter';
import {Card} from 'material-ui/Card';


export default class Chatconatiner extends Component{

    constructor (props) {
        super(props)
        this.state = {
            messages: [],
        }
    }

    componentDidMount () {
        this.socket = io('/');
        this.socket.on('message', message => {
            this.setState({ messages: [...this.state.messages , message] })
        })

    }

    // For sending message by clicking enter
    enter_Submit(event) {
        const body = event.target.value
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Komaldeep Chahal'
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
                from: 'Komaldeep Chahal'
            }
            this.setState({ messages: [...this.state.messages , message ]})
            this.socket.emit('message', body)
        }
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