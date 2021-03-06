import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from "../../atomic/atoms/Button";
import Select from "../../atomic/atoms/Select";
import FormGroup from '../../atomic/molecules/FormGroup';
import ButtonList from '../../atomic/organisms/ButtonList';
import Fieldset from '../../atomic/organisms/Fieldset';
import FormField from '../../atomic/molecules/FormField';
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
    constructor( props ){
        super( props );

        // TODO: the settings here must reflect the settings from Settings
        //  ( these are now still only the default settings )
        //  & the title and sub text reflect the selected button
        //  from the button lists
        this.state = {
            selectedExam: 'Selected exam title',
            selectedExamSubText: 'Test your hiragana skills',
            retrySettings: retryOptions[2].title,
            repeatSettings: repeatOptions[0].title,
            methodSettings: methodOptions[1].title
        };
    }

    submitHandler = ( data ) => {
        // TODO: only gets the data once I have changed at least 1 value in the form
        console.log( data );
        this.props.history.push('/exam');
    };

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
                            <Form id={'selected-exam-form'} onSubmit={ this.submitHandler }>
                                <Fieldset title={ this.state.selectedExam }>
                                    <p className="highlight">{ this.state.selectedExamSubText }</p>
                                    <p>
                                        The settings below only affect the current exam.
                                        To change your default global settings, <NavLink className="highlight" to={'/settings'}>click here</NavLink>.
                                    </p>
                                    <h3>Exam settings</h3>
                                    <FormGroup key={'exam-settings'} id={'exam-settings'}>
                                        <FormField key={'retry-settings'} value={ this.state.retrySettings }>
                                            <Select name={'retry-settings'}
                                                    title={'Allowed retries per question'}
                                                    id={'retry-select'}
                                                    children={ retryOptions }/>
                                        </FormField>
                                        <FormField key={'repeat-settings'} value={ this.state.repeatSettings }>
                                            <Select name={'repeat-settings'}
                                                    title={'Repeat incorrectly answered questions'}
                                                    text={"By default, questions you answered incorrectly will be repeated again at the end of your exam until you answer them correctly. You may also choose to disable this."}
                                                    id={'repeat-select'} children={ repeatOptions }/>
                                        </FormField>
                                        <FormField key={'method-settings'} value={ this.state.methodSettings }>
                                            <Select name={'method-settings'}
                                                    title={'Method'}
                                                    id={'method-select'}
                                                    children={ methodOptions }/>
                                        </FormField>
                                    </FormGroup>

                                    <Button key={'selected-exam-form-btn'}
                                            type={'submit'}
                                            title={'Start exam'}
                                            className={'btn-primary btn-main'}/>
                                </Fieldset>
                            </Form>
                        </Content>
                    </Row>
                </Row>
            </Section>
        )
    }
}

