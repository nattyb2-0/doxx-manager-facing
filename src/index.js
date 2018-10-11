import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// our redux imports go here
//need store from redux
import {createStore} from 'redux'
//to connect app to store we need Provider from react-redux
import {Provider} from 'react-redux'

//import rootreducer to pass into create store
import appReducer from './redux/reducers/rootreducer'

//store store inizialization
//create store takes in an argument called rootreducer
const store = createStore(appReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
