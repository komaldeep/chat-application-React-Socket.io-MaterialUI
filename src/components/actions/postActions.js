import * as actionTypes from './actionTypes';
import io from 'socket.io-client'
var socket = require('socket.io-client');
let all_messages = [];

// export function send_Message(messagebody) {
//
//     this.socket = io('/');
//     this.socket.emit('message', messagebody);
//     return {
//         type: actionTypes.SEND_MESSAGE,
//         payload: messagebody,
//     };
// }
//
// export function recieve_Message() {
//
//     console.log('yes recieve_Message got hit');
//     // this.socket = IO('http://localhost:3000')
//     const io = Server(3000);
//     this.socket.on('message', messagebody => {
//         return {
//             type: actionTypes.RECIEVE_MESSAGE,
//             payload: messagebody,
//         };
//     })
//
// }
//
// export function chat_Message(message) {
//
//     // this.setState({ messages: [...this.state.messages , message] })
//     // all_messages.push(message);
//         return {
//             type: actionTypes.CHAT_MESSAGE,
//             payload: message,
//         };
// }




