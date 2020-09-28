import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Landing from './app/components/sections/landing/Landing';
import Lobby from './app/components/sections/lobby/Lobby';
import Nav from './app/components/decorator/nav/Nav';
import SecondaryNav from "./app/components/decorator/nav/SecondaryNav";
import Footer from './app/components/decorator/footer/Footer';
import About from './app/components/sections/about/About';
import Profile from './app/components/sections/profile/Profile';
import Exam from './app/components/sections/exam/Exam';
import Sheet from './app/components/sections/score/Sheet';
import History from './app/components/sections/score/History';
import Settings from './app/components/sections/settings/Settings';

import './styles/css/index.css';

export default class App extends Component {
    constructor( props ){
        super( props );

        this.state = {
            hideDecorator: false
        };
    }

    render() {
        const hiddenDecorator = this.state.hideDecorator;
        let decorator;

        if ( !hiddenDecorator ){
           decorator =
               <div className="decorator">
                   <Footer/>
                   <Nav/>
                   <SecondaryNav/>
               </div>
        }
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
                    { decorator }
                </div>
            </Router>
        );
    }
}
