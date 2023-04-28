import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const app = <App/>;

ReactDOM.hydrate(app, document.getElementById('root'));