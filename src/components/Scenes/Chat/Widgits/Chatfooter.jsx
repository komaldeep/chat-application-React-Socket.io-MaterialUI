import React, {Component} from "react";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';

export default class Chatfooter extends Component{

    constructor (props) {
        super(props)
        this.state = {
            textFieldValue:'',
        }
    }

    Enter_Submit(event){
        this.props.submitmessage(event);
        if (event.keyCode == 13) {
            event.target.value = ''
            this.setState({
                textFieldValue:''
            })
        }
    }

    SendMessage(){
        this.props.send_button_submit(this.state.textFieldValue);
        this.setState({
            textFieldValue:''
        })
    }

    _handleTextFieldChange(e){
        this.setState({
            textFieldValue: e.target.value
        })
    }

    render(){

        const style = {
            cardstyle:{
                display:"flex",
                flexDirection:"column"
            },
            textinput:{
                width:"91%",
                paddingLeft:"1%"
            }
        };

        return(
            <div className="">

                <Card style={style}>
                    <TextField
                        ref="message"
                        hintText="Enter a message..."
                        style={style.textinput}
                        underlineShow={true}
                        value={this.state.textFieldValue}
                        onChange={this._handleTextFieldChange.bind(this)}
                        onKeyUp={this.Enter_Submit.bind(this)}
                        />

                    <RaisedButton
                        label="Send"
                        onTouchTap={this.SendMessage.bind(this)}
                    />
                </Card>

            </div>
        );


    }
}

