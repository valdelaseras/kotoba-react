import React, { Component } from 'react';

import Form from "../../atomic/organisms/Form";
import Content from '../../layout/Content';
import Section from "../../layout/Section";

import './landing.css';

const formGroup = [
    {
        name: "login",
        inputs: [
            {
                id: "username-input",
                name: "username",
                type: "text",
                placeholder: "Enter your username",
                minLength: '3',
                required: "required"
            }, {
                id: "username-password",
                name: "password",
                type: "text",
                placeholder: "Enter your password",
                minLength: '3',
                required: "required"
            }
        ]
    }
];

export default class Landing extends Component {
    render() {
        return (
            <Section id={'landing'} title={'Kotoba'} titleClass={'font-xxl'}>
                <Content colSize={'column two'}>
                    <p>
                        Memorize Japanese characters and vocabulary. Use the default exams, generate new exams
                        based on your results or create a custom exam yourself!
                    </p>

                    <Form
                          // onSubmit={ onsubmit }
                          // onChange={ onchange }
                          id={ 'login-form' }
                          children={ formGroup }
                          btnType={ 'submit' }
                          btnTitle={ 'Submit' }
                          btnClass={ 'btn-primary btn-main' }/>
                </Content>
            </Section>
        )
    }
}



