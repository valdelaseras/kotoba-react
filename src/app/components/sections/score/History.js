import React, { Component } from 'react';

import Section from "../../layout/Section";
import Content from '../../layout/Content';
import Fieldset from "../../atomic/organisms/Fieldset";
import AnchorList from "../../atomic/organisms/AnchorList";

export default class History extends Component {
    render() {
        return (
            <Section id={'score-history'} title={'Score history'}>
                <Content colSize={'column'}>
                    <Fieldset title={'Your exams'} class={'question'}>
                        <AnchorList children={ examHistory }/>
                    </Fieldset>
                </Content>
            </Section>
        )
    }
}

const examHistory = [
    { id: "1", title: "date, type of test, time", href: "https://weird.io" },
    { id: "2", title: "date, type of test, time", href: "https://weird.io" },
    { id: "3", title: "date, type of test, time", href: "https://weird.io" }
];
