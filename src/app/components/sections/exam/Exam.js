import React, { Component } from 'react';

import Row from "../../layout/Row";
import Section from "../../layout/Section";
import Content from '../../layout/Content';
import Fieldset from "../../atomic/organisms/Fieldset";
import Form from "../../atomic/organisms/Form";
import FormField from "../../atomic/molecules/FormField";
import FormGroup from "../../atomic/molecules/FormGroup";
import Input from "../../atomic/atoms/Input";
import Button from "../../atomic/atoms/Button";

import './exam.css';

export default class Exam extends Component {
    render() {
        return (
            <Section id={'exam'} title={'Hiragana'}>
                <Row colSize={'column'}>
                    <Content colSize={'column two'}>
                        <Form id={'exam-form'}>
                            <Fieldset title={'Current question'}>
                                <FormGroup key={'exam-question'} id={'exam-question-fg'}>
                                    <FormField value={''}>
                                        <Input id={'exam-input'}
                                               name={'answer'}
                                               type={'text'}
                                               placeholder={'Please answer in Current method'}
                                               required={'required'}/>
                                    </FormField>
                                </FormGroup>

                                <div className={'info-bar'}>
                                    <Row colSize={'column two'}>
                                        <small>current count / total retry count</small>
                                    </Row>
                                    <Row colSize={'column two'}>
                                        <div className={'incorrect-answer'}>
                                            <small className={'invalid-color'}>This answer is incorrect</small>
                                        </div>
                                    </Row>
                                </div>

                                <Button key={'submit-answer-btn'}
                                        type={'submit'}
                                        title={'Submit'}
                                        disabled={ true }
                                        className={'btn-primary btn-main'}/>
                            </Fieldset>
                        </Form>
                    </Content>
                    <Content colSize={'column two'}>
                        <Fieldset title={'Stats'}>
                            <ul className="stats">
                                <li>
                                    <h4>Method</h4>
                                    <span>Current method</span>
                                </li>
                                <li>
                                    <h4>Progress</h4>
                                    Current progress
                                </li>
                                <li>
                                    <h4>Correct</h4>
                                    Current correct
                                </li>
                                <li>
                                    <h4>Incorrect</h4>
                                    Current incorrect
                                </li>
                            </ul>
                        </Fieldset>
                    </Content>
                </Row>
            </Section>
        )
    }
}
