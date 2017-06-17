import React,{Component} from 'react';

export default class ActiveUserComponent extends Component{
    render(){
        
        return(
            <div>Active user is:
                {this.props.activeUser!=null?this.props.activeUser.firstName:null} </div>
        )
    }
}