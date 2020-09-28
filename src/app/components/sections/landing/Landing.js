import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Form from "../../atomic/organisms/Form";
import Content from '../../layout/Content';
import Section from "../../layout/Section";

import './landing.css';

// import Input from "../../form-2/atoms/Input";
// import Form from "../../form-2/organisms/Form";
// import Button from "../../atomic/atoms/Button";

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
            }
        ]
    }
];

class Landing extends Component {
    handleSubmit = ( fields ) => {
        const username = fields.find( field => field.name === 'username' );

        this.saveToLocalStorage( username.value  );
        this.props.history.push('/lobby');
    };

    saveToLocalStorage = ( username ) => {
        localStorage.setItem('ktb-username', username );
    };

    render() {
        return (
            <Section id={'landing'} title={'Kotoba'} titleClass={'font-xxl'}>
                <Content colSize={'column two'}>
                    <p>
                        Memorize Japanese characters and vocabulary. Use the default exams, generate new exams
                        based on your results or create a custom exam yourself!
                    </p>

                    <Form submitHandler={ this.handleSubmit }
                          id={ 'login-form' }
                          children={ formGroup }
                          btnType={ 'submit' }
                          btnTitle={ 'Submit' }
                          btnClass={ 'btn-primary btn-main' }/>

                          {/*TODO: Below must be used once form is refactored and can validate all relevant children in the form */}
                          {/*then remove formGroup cons as well*/}
                    {/*<Form id={'login-form'} */}
                          {/*onSubmit={ this.handleSubmit() }>*/}
                          {/*<Input id={'username-input'} name={'username'} type={'text'} placeholder={'Enter your username'} minLength={'2'} required={'required'}/>*/}
                    {/*<Button type={'submit'}*/}
                            {/*title={'Submit'}*/}
                            {/*class={'btn-primary btn-main'}/>*/}
                    {/*</Form>*/}
                </Content>
            </Section>
        )
    }
}

export default withRouter(Landing);

