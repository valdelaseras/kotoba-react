import React, { Component } from 'react';

import Content from '../../layout/Content';
import ButtonList from "../../atomic/organisms/ButtonList";

import './secondary-nav.css';

const buttons = [
    { id: "1", to: "/", title: "Back", class: "btn-secondary" },
    { id: "2", to: "/lobby", title: "Lobby", class: "btn-secondary" },
    { id: "3", to: "/settings", title: "Settings", class: "btn-secondary" }
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
