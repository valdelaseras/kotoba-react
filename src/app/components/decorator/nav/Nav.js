import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LinkList from "../../atomic/organisms/LinkList";

const brandingData = { href: "https://weird.io", title: "Lobby", branding: "言葉" };
const linkData = [
    { id: "1", href: "https://weird.io", title: "About" },
    { id: "2", href: "https://weird.io", title: "Profile" },
    { id: "3", href: "https://weird.io", title: "Lobby" },
    { id: "4", href: "https://weird.io", title: "Settings" },
    { id: "5", href: "https://weird.io", title: "Score history" }
];

const Branding = props =>
    <div className="branding-logo">
        <a href={ props.href } title={ props.title }>
            <span className="bold">{ props.branding }</span>
        </a>
    </div>;

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Branding href={ brandingData.href } title={ brandingData.title } branding={ brandingData.branding }/>
                <LinkList class={ 'nav-list desktop-only' } children={ linkData.slice(0, 2) }/>
                <div className="mobile-menu mobile-only">
                    <input type="checkbox" id="nav-checkbox" className="nav-checkbox"/>
                    <label htmlFor="nav-checkbox" className="nav-toggle">
                        <span/><span/><span/>
                    </label>
                    <div className="slide-in-menu">
                        <LinkList class={ 'mobile-nav-list' } children={ linkData }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
