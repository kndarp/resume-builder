import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import ProfilePicture from "../ProfilePicture";

const mainPaperStyle = {
    margin: 20, 
    marginTop: 200,
    padding : 20
}

const profilePicturePosition = {
    position: "relative",
    left: 50,
    top: -75,
    float: "left"
}

export default class LetterHead extends Component{
    render(){
        return(
            <Paper zdepth = "2" style = {mainPaperStyle}>
                <ProfilePicture src = "http://via.placeholder.com/180x180" position = {profilePicturePosition}/>
                <h1 style = {{"display" : "inline"}}>Lorem Ipsum</h1>
            </Paper>
        )
    }
}