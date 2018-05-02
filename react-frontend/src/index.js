import React from 'react';
import ReactDOM from 'react-dom';
import  from 'react-router'
import Routes from './routes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);
registerServiceWorker();




