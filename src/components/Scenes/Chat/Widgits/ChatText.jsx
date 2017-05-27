import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


export default class ChatText extends Component{

    constructor (props) {
        super(props)
        this.state = {

        }
    }



    render(){
        const style = {
            card:{
                height:"70px",
            }
        }

        return(
            <div>
                <Card style={style.card}>
                    <CardText>
                        <b> {this.props.chat_messages.from} </b><br/>
                        {this.props.chat_messages.body}
                    </CardText>
                </Card>
            </div>
        );
    }
}

