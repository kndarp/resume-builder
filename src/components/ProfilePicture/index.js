import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import extend from 'extend';

var profilePictureStyle = {
    width: 200,
    height: 200
}
const imgStyle = {
    margin: 10,
    width: 180,
    height: 180
}
export default class ProfilePicture extends Component{
    render(){
        if(this.props.position){
         extend( profilePictureStyle, this.props.position);
        };

        return(
           <Paper zdepth = {5} style = {profilePictureStyle}>
            <img src = {this.props.src} style = {imgStyle}/>
            </Paper>
        )
    }
}