import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Nav from './app/components/decorator/nav/Nav';
import Footer from './app/components/decorator/footer/Footer';
import Landing from './app/components/sections/landing/Landing';
import Lobby from './app/components/sections/lobby/Lobby';
import About from './app/components/sections/about/About';
import Profile from './app/components/sections/profile/Profile';
import Exam from './app/components/sections/exam/Exam';
import Sheet from './app/components/sections/score/Sheet';
import History from './app/components/sections/score/History';
import Settings from './app/components/sections/settings/Settings';

import './styles/css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
// ReactDOM.render(<Landing />, document.getElementById('main'));
// ReactDOM.render(<Lobby />, document.getElementById('main'));
// ReactDOM.render(<About />, document.getElementById('main'));
// ReactDOM.render(<Profile />, document.getElementById('main'));
// ReactDOM.render(<Exam />, document.getElementById('main'));
// ReactDOM.render(<Sheet />, document.getElementById('main'));
// ReactDOM.render(<History />, document.getElementById('main'));
ReactDOM.render(<Settings />, document.getElementById('main'));
