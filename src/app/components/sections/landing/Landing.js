import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Content from '../../layout/Content';
import Section from "../../layout/Section";
import Input from "../../form-2/atoms/Input";
import Form from "../../form-2/organisms/Form";
import Button from "../../atomic/atoms/Button";

import './landing.css';
import FormGroup from "../../form-2/molecules/FormGroup";

class Landing extends Component {
    // constructor( props ){
    //     super( props );
    //
    //     this.state = {
    //         isValid: false
    //         // disabled: 'disabled'
    //     }
    // }
    // handleSubmit = ( fields ) => {
    //     const username = fields.find( field => field.name === 'username' );
    //
    //     this.saveToLocalStorage( username.value  );
    //     this.props.history.push('/lobby');
    // };

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

                    <Form id={'login-form'} btnTitle={'Submit'} btnClass={'btn-primary btn-main'}>
                        <FormGroup key={ 'login-details' } id={'login'}>
                            <Input id={'username-input'} name={'username'} type={'text'} placeholder={'Enter your username'} minLength={'3'} required={'required'}/>
                            <Input id={'password-input'} name={'password'} type={'text'} placeholder={'Enter your password'} minLength={'3'} required={'required'}/>
                        </FormGroup>

                        <Button key={'login-form-btn'}
                                type={'submit'}
                                title={'Submit'}
                                className={'btn-primary btn-main'}/>
                    </Form>
                </Content>
            </Section>
        )
    }
}

export default withRouter(Landing);

