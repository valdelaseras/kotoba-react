import React, { Component } from 'react';

import Row from '../../layout/Row';
import Section from '../../layout/Section';
import Content from '../../layout/Content';
import Fieldset from '../../atomic/organisms/Fieldset';
import Button from '../../atomic/atoms/Button';

import Checkbox from '../../form-2/atoms/Checkbox';
import Input from '../../form-2/atoms/Input';
import Select from '../../form-2/atoms/Select';
import RadioButton from "../../form-2/atoms/RadioButton";
import Form from "../../form-2/organisms/Form";
import FormGroup from "../../form-2/molecules/FormGroup";

const groupone = [
    {
        name: "groupone",
        inputs: [
            {
                id: "grouponeone",
                name: "grouponeone",
                title: "checkbox",
                type: "checkbox",
                required: "required"
            },
            {
                id: "grouponetwo",
                name: "grouponetwo",
                type: "text",
                placeholder: "grouponetwo",
                minLength: '3',
                required: "required"
            }
        ]
    }
];
const grouptwo = [
    {
        name: "grouptwo",
        inputs: [
            {
                id: "grouptwoone",
                name: "grouptwoone",
                type: "text",
                placeholder: "grouptwoone",
                minLength: '3',
                required: "required"
            },
            {
                id: "grouptwotwo",
                name: "grouptwotwo",
                type: "text",
                placeholder: "grouptwotwo",
                minLength: '3',
                required: "required"
            }
        ]
    }
];
const groupthree = [
    {
        name: "groupthree",
        inputs: [
            {
                id: "groupthreeone",
                name: "groupthreeone",
                type: "text",
                placeholder: "groupthreeone",
                minLength: '3',
                required: "required"
            },
            {
                id: "groupthreetwo",
                name: "groupthreetwo",
                type: "text",
                placeholder: "groupthreetwo",
                minLength: '3',
                required: "required"
            }
        ]
    }
];

const selectOptions = [
    { id: '1', title: 'title one' },
    { id: '2', title: 'title two' },
    { id: '3', title: 'title three' },
];

export default class Settings extends Component {
    handleSubmit = () => {
      console.log('submit');
    };

    render() {
        return (
            <Section id={'settings'} title={'Settings'}>
                <Row colSize={'column'}>
                    <Form id={'test-form'}>
                        <Row colSize={'column'}>
                            <Content colSize={'column two'}>
                                <Fieldset title={'Exams'}>
                                    <FormGroup id={'exam-settings'}>
                                        <Checkbox id={'checkbox-test'}
                                                  title={'Checkbox test'}
                                                  checked={'checked'}
                                                  name={'checkbox'}/>
                                        <Input id={'input-test'}
                                               name={'input'}
                                               type={'text'}
                                               minLength={'3'}
                                               required={'required'}
                                               placeholder={'placeholder'}/>
                                    </FormGroup>
                                </Fieldset>
                            </Content>

                            <Content colSize={'column two'}>
                                <Fieldset title={'Visual preferences'}>
                                    <FormGroup id={'visual-settings'}>
                                        <Select id={'select-test'}
                                                name={'select'}
                                                required={'required'}
                                                children={ selectOptions }
                                                title={'a select elm'}/>
                                        <RadioButton id={'radio-test'}
                                                     checked={'checked'}
                                                     name={'single-radio'}
                                                     required={'required'}
                                                     title={'Single radiobtn'}/>
                                    </FormGroup>
                                </Fieldset>
                            </Content>
                        </Row>

                        <Row colSize={'column'}>
                            <Content colSize={'column two'}>
                                <Fieldset title={'General settings'}>
                                    <FormGroup id={'general-settings'}>
                                        <RadioButton id={'radio-grp-one'}
                                                     class={'horizontal'}
                                                     name={'radio-group'}
                                                     required={'required'}
                                                     title={'Group radiobtn'}/>
                                        <RadioButton id={'radio-grp-two'}
                                                     name={'radio-group'}
                                                     checked= {'checked'}
                                                     class={'horizontal'}
                                                     required={'required'}/>
                                    </FormGroup>
                                </Fieldset>
                                <Button type={'submit'}
                                        title={'Save'}
                                        class={'btn-primary btn-main'}/>
                            </Content>
                        </Row>
                    </Form>
                </Row>
            </Section>
        )
    }
}

// TODO: I should remove the form submit button from Form
