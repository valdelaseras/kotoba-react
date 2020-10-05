import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from "../../atomic/atoms/Button";
import Select from "../../atomic/atoms/Select";
import FormGroup from '../../atomic/molecules/FormGroup';
import ButtonList from '../../atomic/organisms/ButtonList';
import Fieldset from '../../atomic/organisms/Fieldset';
import Form from '../../atomic/organisms/Form';
import Content from '../../layout/Content';
import Row from '../../layout/Row';
import Section from "../../layout/Section";

import './lobby.css';

const retryOptions = [
    { id: "1", title: "None" },
    { id: "2", title: "Once" },
    { id: "3", title: "Twice" },
    { id: "4", title: "Infinite retries" }
];

const repeatOptions = [
    { id: "1", title: "Repeat until answered correctly" },
    { id: "2", title: "Never repeat" }
];

const kanaExams = [
    { id: 'hiragana', className: 'btn-secondary active', title: 'Hiragana' },
    { id: 'katakana', className: 'btn-secondary', title: 'Katakana' },
    { id: 'mixed-kana', className: 'btn-secondary', title: 'All kana' },
];

const kanjiExams = [
    { id: 'kanjin5', className: 'btn-secondary', title: 'Kanji N5' },
    { id: 'kanjin4', className: 'btn-secondary', title: 'Kanji N4' },
    { id: 'kanjin3', className: 'btn-secondary', title: 'Kanji N3' },
    { id: 'kanjin2', className: 'btn-secondary', title: 'Kanji N2' },
    { id: 'kanjin1', className: 'btn-secondary', title: 'Kanji N1' },
    { id: 'mixed-kanji', className: 'btn-secondary', title: 'All kanji' },
];

const methodOptions = [
    { id: "1", title: "Lorem ipsum" },
    { id: "2", title: "Lorem ipsum" }
];

export default class Lobby extends Component {
    render() {
        return (
            <Section id={'lobby'} title={'Lobby'}>
                <Row colSize={'column'}>
                    <Row colSize={'column two'}>
                        <Content colSize={'column'}>
                            <Fieldset class={'reduce-fs-padding'} title={ 'Kana' }>
                                <ButtonList class={ 'vertical' }
                                            children={ kanaExams }/>
                            </Fieldset>
                        </Content>
                        <Content colSize={'column'}>
                            <Fieldset class={'reduce-fs-padding'} title={ 'Kanji' }>
                                <ButtonList class={ 'vertical' }
                                            children={ kanjiExams }/>
                            </Fieldset>
                        </Content>
                    </Row>
                    <Row colSize={'column two'}>
                        <Content colSize={'column'}>
                            <div className="selected-exam">
                                <Form id={'selected-exam-form'}>
                                    <Fieldset title={'Selected exam title'}>
                                        <p className="highlight">Selected exam sub text</p>
                                        <p>
                                            The settings below only affect the current exam.
                                            To change your default global settings, <NavLink className="highlight" to={'/settings'}>click here</NavLink>.
                                        </p>
                                        <h3>Exam settings</h3>
                                        <FormGroup id={'exam-settings'}>
                                            <Select name={'retry-settings'}
                                                    title={'Allowed retries per question'}
                                                    id={'retry-select'}
                                                    children={ retryOptions }/>
                                            <Select name={'repeat-settings'}
                                                    title={'Repeat incorrectly answered questions'}
                                                    text={"By default, questions you answered incorrectly will be repeated again at the end of your exam until you answer them correctly. You may also choose to disable this."}
                                                    id={'repeat-select'} children={ repeatOptions }/>
                                            <Select name={'method-settings'}
                                                    title={'Method'}
                                                    id={'method-select'}
                                                    children={ methodOptions }/>
                                        </FormGroup>
                                        <Button type={'submit'}
                                                title={'Start exam'}
                                                className={'btn-primary btn-main'}/>
                                    </Fieldset>
                                </Form>
                            </div>
                        </Content>
                    </Row>
                </Row>
            </Section>
        )
    }
}
