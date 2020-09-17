import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Nav from './app/components/decorator/nav/Nav';
import Footer from './app/components/decorator/footer/Footer';
import Landing from './app/components/landing/Landing';
// import Lobby from './app/components/lobby/Lobby';

import './styles/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Landing />, document.getElementById('content'));
// ReactDOM.render(<Lobby />, document.getElementById('content'));
