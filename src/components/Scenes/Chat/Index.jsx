import React, {Component} from "react";
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import io from 'socket.io-client';
import NavigationHeader from './../../AppComponent/NavigationHeader';
import ChatText from './Widgits/ChatText';
import Chatfooter from './Widgits/Chatfooter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Index extends Component{

    constructor (props) {
        super(props)
        this.state = {
            messages: [],
            email:"komaldeep1993@gmail.com",
        }
    }

    componentDidMount () {
        this.socket = io('/');
        this.socket.on('message', message => {
            this.setState({ messages: [...this.state.messages , message] })
        })

    }

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

    // scrollToBottom() {
    //     const {messagesContainer} = this.refs;
    //
    //     // messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    //     messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    // }

    // componentDidMount() {
    //     this.scrollToBottom.bind(this);
    // }
    //
    // componentDidUpdate() {
    //     this.scrollToBottom.bind(this);
    // }


    render(){

        const style = {
            height:"600px",
            maxHeight:"600px",
            overflowY:"auto",
        };


        return(
            <div>
                <NavigationHeader />

                    <Card
                        style={style}
                        ref="messagesContainer" >
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

function mapStateToProps(store) {
    return { posts: store.posts};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}


const chatconatiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

export default chatconatiner;

