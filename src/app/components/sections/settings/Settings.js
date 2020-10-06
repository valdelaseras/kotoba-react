import React, { Component } from 'react';

import Row from '../../layout/Row';
import Section from '../../layout/Section';
import Content from '../../layout/Content';
import Fieldset from '../../atomic/organisms/Fieldset';
import Button from '../../atomic/atoms/Button';

import Checkbox from '../../atomic/atoms/Checkbox';
import Select from '../../atomic/atoms/Select';
import Form from "../../atomic/organisms/Form";
import FormGroup from "../../atomic/molecules/FormGroup";
import FormField from "../../atomic/molecules/FormField";

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

const themeOptions = [
    { id: "2", title: "Light theme" },
    { id: "1", title: "Dark theme" }
];

const fontFamilyOptions = [
    { id: "1", title: "Helvetica" },
    { id: "2", title: "Montserrat" },
    { id: "3", title: "Comfortaa"}
];

const fontSizeOptions = [
    { id: "1", title: "Normal" },
    { id: "2", title: "L" },
    { id: "3", title: "XL" }
];

export default class Settings extends Component {
    submitHandler = () => {
      console.log('submit');
    };

    render() {
        return (
            <Section id={'settings'} title={'Settings'}>
                <Row colSize={'column'}>
                    <Form id={'settings-form'}>
                        <Row colSize={'column'}>
                            <Content colSize={'column two'}>
                                <Fieldset title={'Exams'}>
                                    <h3>Incorrect answers</h3>
                                    <p>
                                        Set your preference on handling incorrectly answered questions.
                                    </p>
                                    <FormGroup key={'exam-settings'} id={'exam-settings'}>
                                        <FormField key={'retry-settings'} value={ retryOptions[2].title }>
                                            <Select name={'retry'}
                                                    title={'Allowed retries per question'}
                                                    text={'The amount of retries allowed before moving on to the next question'}
                                                    id={'retry-select'}
                                                    children={ retryOptions }/>
                                        </FormField>
                                        <FormField key={'repeat-settings'} value={ repeatOptions[0].title }>
                                            <Select name={'repeat'}
                                                    title={'Repeat incorrectly answered questions'}
                                                    text={"By default, questions you answered incorrectly will be repeated again at the end of your exam until you answer them correctly. You may also choose to disable this."}
                                                    id={'repeat-select'}
                                                    children={ repeatOptions }/>
                                        </FormField>
                                    </FormGroup>
                                </Fieldset>
                            </Content>

                            {/*<Content colSize={'column two'}>*/}
                                {/*<Fieldset title={'Visual preferences'}>*/}
                                    {/*<FormGroup key={'visual-settings'} id={'visual-settings'}>*/}
                                        {/*<h3>Theme</h3>*/}
                                        {/*<FormField key={'theme-select'} value={ themeOptions[0].title }>*/}
                                            {/*<Select name={'theme'}*/}
                                                    {/*id={'theme-select'}*/}
                                                    {/*children={ themeOptions }/>*/}
                                        {/*</FormField>*/}
                                        {/*<h3>Text preference</h3>*/}
                                        {/*<p>*/}
                                            {/*For kids who can't read good and want to learn how to do other stuff good too*/}
                                        {/*</p>*/}
                                        {/*<FormField key={'font-family-select'} value={ fontFamilyOptions[0].title }>*/}
                                            {/*<Select name={'font-family'}*/}
                                                    {/*title={'Font family'}*/}
                                                    {/*id={'ff-select'}*/}
                                                    {/*children={ fontFamilyOptions }/>*/}
                                        {/*</FormField>*/}
                                        {/*<FormField key={'font-size-select'} value={ fontSizeOptions[0].title }>*/}
                                            {/*<Select name={'font-size'}*/}
                                                    {/*title={'Font size'}*/}
                                                    {/*id={'fs-select'}*/}
                                                    {/*children={ fontSizeOptions }/>*/}
                                        {/*</FormField>*/}
                                    {/*</FormGroup>*/}
                                {/*</Fieldset>*/}
                            {/*</Content>*/}
                        </Row>

                        <Row colSize={'column'}>
                            <Content colSize={'column two'}>
                                {/*<Fieldset title={'General settings'}>*/}
                                    {/*<FormGroup key={'general-settings'} id={'general-settings'}>*/}
                                        {/*<FormField key={'local-record'} value={'checked'}>*/}
                                            {/*<Checkbox id={'local-record'}*/}
                                                      {/*text={'Keep a local record of your scores'}*/}
                                                      {/*title={'Score history'}*/}
                                                      {/*name={'record'}/>*/}
                                        {/*</FormField>*/}
                                    {/*</FormGroup>*/}
                                {/*</Fieldset>*/}
                                <Button type={'submit'}
                                        title={'Save'}
                                        onSubmit={ this.submitHandler }
                                        class={'btn-primary btn-main'}/>
                            </Content>
                        </Row>
                    </Form>
                </Row>
            </Section>
        )
    }
}

// TODO: btn-main class is 'undefined'
// TODO: Form cannot yet handle multiple FormGroups
