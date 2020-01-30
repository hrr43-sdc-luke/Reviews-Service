import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import './styles/styles.css';

let URL = window.location.href.split('/');
let expId = URL[URL.length - 1];

ReactDOM.render(<App  expId={expId} />, document.getElementById('app'));