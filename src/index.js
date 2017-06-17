import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
//store is ONE big javascript object. ONE.
const store = createStore(allReducers);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
