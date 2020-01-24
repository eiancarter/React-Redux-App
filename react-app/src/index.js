import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
