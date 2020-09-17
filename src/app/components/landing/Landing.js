import React, { Component } from 'react';

import Form from "../atomic/organisms/Form";
import Row from '../layout/Row';
import Content from '../layout/Content';
import Section from "../layout/Section";

const formGroup = [
    {
        id: "user-info",
        inputs: [
            {
                id: "username-input",
                name: "login",
                type: "text",
                placeholder: "Enter your username",
                required: ""
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

                    <Form id={ 'login-form' }
                          children={ formGroup }
                          btnType={ 'submit' }
                          btnTitle={ 'Submit' }
                          btnClass={ 'btn-primary btn-main' }
                          btnDisabled={ 'disabled '} />
                </Content>
            </Section>
        )
    }
}
