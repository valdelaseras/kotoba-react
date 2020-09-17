import React, { Component } from 'react';
import Section from "../../layout/Section";
import Row from "../../layout/Row";
import Content from "../../layout/Content";
import Fieldset from "../../atomic/organisms/Fieldset";

export default class Sheet extends Component {
    render() {
        return (
            <Section id={'score'} title={'Score'}>
                <Row colSize={'column'}>
                    <Content colSize={'column two'}>
                        <Fieldset title={'Overview'}>
                            {/*Used columns in Angular to render every Q - A but maybe I will */}
                            {/*build some table component instead for this*/}
                        </Fieldset>
                    </Content>
                    <Content colSize={'column two'}>
                        <Fieldset title={'Stats'}>
                            {/*Used a list in Angular but I think I might also use table here instead*/}
                        </Fieldset>
                    </Content>
                </Row>
            </Section>
        )
    }
}
