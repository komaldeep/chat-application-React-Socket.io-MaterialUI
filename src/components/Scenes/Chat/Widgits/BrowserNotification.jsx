import React, {Component} from "react";
import Notification  from 'react-web-notification';

export default class BrowserNotification extends Component{

    constructor (props) {
        super(props)
        this.state = {
            ignore: true,
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
        console.log(e, 'Notification shown tag:' + tag);
    }



    render(){
        console.log(this.props.title,'title is');
        console.log(this.props.options,'this.props.options');

        return(
            <div>
                <Notification
                    ignore={this.state.ignore}
                    notSupported={this.handleNotSupported.bind(this)}
                    onPermissionGranted={this.handlePermissionGranted.bind(this)}
                    onPermissionDenied={this.handlePermissionDenied.bind(this)}
                    onShow={this.handleNotificationOnShow.bind(this)}
                    onClick={this.handleNotificationOnClick.bind(this)}
                    onClose={this.handleNotificationOnClose.bind(this)}
                    onError={this.handleNotificationOnError.bind(this)}
                    timeout={5000}
                    title={this.props.title}
                    options={this.props.options}
                />
            </div>
        );
    }
}

