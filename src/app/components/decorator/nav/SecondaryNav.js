import React, { Component } from 'react';

import Content from '../../layout/Content';
import ButtonList from "../../atomic/organisms/ButtonList";

import './secondary-nav.css';

const buttons = [
    { id: "1", type: "button", link: "/", title: "Back", className: "btn-secondary" },
    { id: "2", type: "button", link: "/lobby", title: "Lobby", className: "btn-secondary" },
    { id: "3", type: "button", link: "/settings", title: "Settings", className: "btn-secondary" }
];

export default class SecondaryNav extends Component {
    render() {
        return (
            <nav className='secondary-nav'>
                <div className="grid">
                    <Content colSize={'column'}>
                        <ButtonList children={ buttons }/>
                    </Content>
                </div>
            </nav>
        )
    }
}
