import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserList from '../.././components/User-List-Component/UserListComponent.js'
import {selectUser} from '../.././actions/User-List-Actions/UserListActions.js'

class UserListContainer extends Component{
    render(){
        return(

            <UserList users={this.props.users} selectUser={this.props.selectUser}/>
        )
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser:selectUser
    },dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserListContainer);