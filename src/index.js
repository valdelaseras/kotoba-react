import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import App from './App';

import './styles/css/index.css';
import Landing from "./app/components/sections/landing/Landing";
import Lobby from "./app/components/sections/lobby/Lobby";
import About from "./app/components/sections/about/About";
import Profile from "./app/components/sections/profile/Profile";
import Exam from "./app/components/sections/exam/Exam";
import Sheet from "./app/components/sections/score/Sheet";
import History from "./app/components/sections/score/History";
import Settings from "./app/components/sections/settings/Settings";

ReactDOM.render(
    <Router>
        <App>
            <Route path="/" exact component={ Landing }/>
            <Route path="/lobby" component={ Lobby }/>
            <Route path="/about" component={ About }/>
            <Route path="/profile" component={ Profile }/>
            <Route path="/exam" component={ Exam }/>
            <Route path="/sheet" component={ Sheet }/>
            <Route path="/history" component={ History }/>
            <Route path="/settings" component={ Settings }/>
        </App>
    </Router>
, document.getElementById('root'));
