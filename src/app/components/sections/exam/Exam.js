import React, { Component } from 'react';

import Row from "../../layout/Row";
import Section from "../../layout/Section";
import Content from '../../layout/Content';
import Fieldset from "../../atomic/organisms/Fieldset";

import './exam.css';
import Form from "../../atomic/organisms/Form";

export default class Exam extends Component {
    render() {
        return (
            <Section id={'exam'} title={'Hiragana'}>
                <Row colSize={'column'}>
                    <Content colSize={'column two'}>
                        <Fieldset title={'ぐ'} class={'exam-fs'}>
                            <Form id={'exam-form'}
                                  children={ formGroup }
                                  btnType={'submit'}
                                  btnTitle={'Submit'}
                                  btnClass={'btn-primary btn-main'}/>
                    {/*TODO: between input and button, 'info-bar' should be displayed*/}
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

const formGroup = [
    {
        id: 'exam-fg',
        inputs: [
            {
                id: 'question',
                name: 'exam-question',
                type: 'text',
                placeholder: 'Romaji',
                required: 'required'
            }
        ]
    }
];
