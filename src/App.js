import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// TODO: I imported Link before but now I am not really using it and all my anchors just work. It's nice that it is
//  working but I wonder if this is an anti pattern or something ( even though Links are rendered to anchor anyway ).
//  Reason I rather not use Link is so I can use my Anchor components for external and internal links without having to
//  switch between 'Link' and a simple 'a' tag

import Landing from './app/components/sections/landing/Landing';
import Lobby from './app/components/sections/lobby/Lobby';
import Nav from './app/components/decorator/nav/Nav';
import Footer from './app/components/decorator/footer/Footer';
import About from './app/components/sections/about/About';
import Profile from './app/components/sections/profile/Profile';
import Exam from './app/components/sections/exam/Exam';
import Sheet from './app/components/sections/score/Sheet';
import History from './app/components/sections/score/History';
import Settings from './app/components/sections/settings/Settings';

import './styles/css/index.css';
import SecondaryNav from "./app/components/decorator/nav/SecondaryNav";

export default class App extends Component {
    render() {
        return (
            <Router>
            <div className="App theme-settings helvetica normal light-theme">
                <Switch>
                    <Route path="/" exact component={ Landing }/>
                    <Route path="/lobby" component={ Lobby }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="/exam" component={ Exam }/>
                    <Route path="/sheet" component={ Sheet }/>
                    <Route path="/history" component={ History }/>
                    <Route path="/settings" component={ Settings }/>
                </Switch>
                <Footer/>
                <Nav/>
                <SecondaryNav/>
            </div>
            </Router>
        );
    }
}
