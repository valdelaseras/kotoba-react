import React, { Component } from 'react';

import Row from '../../layout/Row';
import Section from "../../layout/Section";
import Content from '../../layout/Content';
import Fieldset from "../../atomic/organisms/Fieldset";

export default class Settings extends Component {
    render() {
        return (
            <Section id={'settings'} title={'Settings'}>
                <Row colSize={'column'}>
                    {/*TODO: these 3 Content must be wrapped by a Form*/}
                    <Content colSize={'column two'}>
                        <Fieldset title={'Exams'}>

                        </Fieldset>
                    </Content>
                    <Content colSize={'column two'}>
                        <Fieldset title={'Visual preference'}>

                        </Fieldset>
                    </Content>
                    <Content colSize={'column two'}>
                        <Fieldset title={'General'}>

                        </Fieldset>
                    </Content>
                </Row>
            </Section>
        )
    }
}

