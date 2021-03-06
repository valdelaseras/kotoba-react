import React, { Component } from 'react';

import Content from '../../layout/Content';
import Section from "../../layout/Section";
import Fieldset from "../../atomic/organisms/Fieldset";
import AnchorList from "../../atomic/organisms/AnchorList";

export default class Profile extends Component {
    render() {
        return (
            <Section id={'profile'} title={'Your profile'}>
                <Content colSize={'column two'}>
                    <Fieldset title={ localStorage.getItem('ktb-username') }>
                        <AnchorList children={ profileList }/>
                    </Fieldset>
                </Content>
            </Section>
        )
    }
}

const profileList = [
    { id: '1', title: 'Settings', href: '/settings' },
    { id: '2', title: 'Your score history', href: '/history' }
];
