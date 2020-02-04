import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/styles.css';

const URL = window.location.href.split('/');
const expId = URL[URL.length - 1];

ReactDOM.render(<App expId={expId} />, document.getElementById('reviewsSection'));
