import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ActiveUserComponent from '../.././components/Active-User-Component/ActiveUserComponent.js'

class ActiveUserContainer extends Component{
    render(){
        return(
            <ActiveUserComponent activeUser={this.props.activeUser} />
        )
    }
}

function mapStateToProps(state){
    return{
        activeUser:state.activeUser
    }
}

export default connect(mapStateToProps)(ActiveUserContainer);