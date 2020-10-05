import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Content from '../../layout/Content';
import Section from "../../layout/Section";

import Form from "../../atomic/organisms/Form";
import FormGroup from "../../atomic/molecules/FormGroup";
import FormField from "../../atomic/molecules/FormField";

import Input from "../../atomic/atoms/Input";
import Button from "../../atomic/atoms/Button";

import './landing.css';

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

                    <Form id={'login-form'}>
                        <FormGroup key={ 'login-details' } id={'login'}>
                            <FormField value={''} key='username'>
                                <Input id={'username-input'}
                                       name={'username'}
                                       type={'text'}
                                       placeholder={'Enter your username'}
                                       minLength={'3'}
                                       required={'required'}/>
                            </FormField>
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

