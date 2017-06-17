import React, { Component } from 'react';

export default class UserListComponent extends Component {
    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(){
        this.props.selectUser(this.props.users[0]);
    }
    render() {
        return (
            <div>
                <div onClick={this.handleOnClick}>
                    Name:{this.props.users[0].firstName}
                </div>
                <div>
                    Email:{this.props.users[0].email}
                </div>
                
            </div>
        )
    }
}