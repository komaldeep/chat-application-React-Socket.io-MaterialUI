import React, {Component} from "react";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


export default class Chatfooter extends Component{

    constructor (props) {
        super(props)
        this.state = {
            textFieldValue:'',
        }
    }

    // sending message by keypress of enter in keyboard
    //then calling the value of props on roor index.jsx file
    Enter_Submit(event){
        this.props.submitmessage(event);
        if (event.keyCode == 13) {
            event.target.value = ''
            this.setState({
                textFieldValue:''
            })
        }
    }

    // sending message by clicking on button and then calling the props on
    // root(Index.jsx) file

    SendMessage(){
        this.props.send_button_submit(this.state.textFieldValue);
        this.setState({
            textFieldValue:''
        })
    }

    //for getting the value of textfield input value
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

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
            muiTheme: getMuiTheme(baseTheme)
        }
    }
}

