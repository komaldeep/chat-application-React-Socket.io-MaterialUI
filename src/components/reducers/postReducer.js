import * as actionTypes from '../../components/actions/actionTypes';

export default function postReducer(state={
    Message:[],
    ChatTexts:[],
}, action){
    switch (action.type){

        case "RECIEVE_MESSAGE":
        {
            return {...state, Message: action.payload}
        }

        case "SEND_MESSAGE":
        {
            return {...state, Message: action.payload}
        }

        case "CHAT_MESSAGE":
        {
            return {...state, ChatTexts: action.payload}
        }

        default: return state;

    }
    return state;
}
