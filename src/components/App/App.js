import React, { Component } from 'react';
import logo from './logo.svg';
import '../.././styles/App.css';
import Home from '.././Home/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
