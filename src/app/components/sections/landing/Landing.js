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
    submitHandler = ( form )  => {
        console.log( form );
        // this.saveToLocalStorage( username );

        const username = this.getField( form, 'username' );
        console.log(username);
    };

    // This method could be used anywhere so it would be good if this was global or something
    getField = ( form, fieldName ) => {
        // If because initially the field is empty and has no fields prop yet, only ID and
        // isValid of the form group(s)
        if ( form[0].fields) {
            return form[0].fields.find( field => field.name === fieldName );
        }
    };

    // submitHandler = ( fields ) => {
    //     const username = fields.find( field => field.name === 'username' );
    //
    //     this.saveToLocalStorage( username.value  );
    //     this.props.history.push('/lobby');
    // };

    saveToLocalStorage = ( username ) => {
        console.log('saving to local storage');
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

                    <Form id={'login-form'} onSubmit={ this.submitHandler }>
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
                                // link={'/lobby'}
                                className={'btn-primary btn-main'}/>
                    </Form>
                </Content>
            </Section>
        )
    }
}

export default withRouter(Landing);

