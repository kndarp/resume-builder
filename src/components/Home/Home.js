import React,{Component} from 'react';
import LetterHead from "../LetterHead";
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Home extends Component{
    render(){
        return(
            <Grid fluid>
                        <LetterHead/>
            </Grid>
        )
    }
}