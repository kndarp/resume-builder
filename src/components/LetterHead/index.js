/**
 * Created by Kndarp Patel (github.com/kndarp) 
 */

import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import ProfilePicture from "../ProfilePicture";
import {Row, Col} from 'react-flexbox-grid';

const mainPaperStyle = {
    margin: 20, 
    marginTop: 200,
    padding : 20
}

export default class LetterHead extends Component{
    render(){
        return(
            <Row>
                <Col xs={12} >
                    <Paper zdepth = "2" style = {mainPaperStyle}>
                        
                            <Col md ={3} xs={8} >
                                <ProfilePicture src = "http://via.placeholder.com/180x180" className = "resume-letterhead resume-profile-picture"/>
                            </Col>
                            <Col md ={12} xs= {12}>
                                <Row>
                                    <h1 className = "resume-letterhead resume-title" >Lorem Ipsum</h1>
                                </Row>
                                <Row>
                                    <h4 className = "resume-letterhead resume-subtitle">Tattooed pop-up pug</h4>
                                </Row>
                                <hr/>
                                <Row>
                                    <h5 className = "resume-letterhead resume-contact">+1234567910</h5>     
                                    <h5 className = "resume-letterhead resume-contact">|</h5>
                                    <h5 className = "resume-letterhead resume-contact">tattoo-pop-up@pug.com</h5>
                                </Row>
                            </Col>
                        
                    </Paper>
                </Col>
            </Row>
        )
    }
}