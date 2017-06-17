import React, { Component } from 'react';
import logo from './logo.svg';
import '../.././styles/App.css';
import Home from '.././Home/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import UserListContainer from '../.././containers/User-List-Container/UserListContainer'
import ActiveUserContainer from '../.././containers/Active-User-Container/ActiveUserContainer'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <UserListContainer />
        <ActiveUserContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
