import React, { Component } from 'react';

import Row from '../../layout/Row';
import Section from "../../layout/Section";
import Content from '../../layout/Content';
import Fieldset from "../../atomic/organisms/Fieldset";
import Form from "../../atomic/organisms/Form";

const groupone = [
    {
        name: "groupone",
        inputs: [
            {
                id: "grouponeone",
                name: "grouponeone",
                type: "text",
                placeholder: "grouponeone",
                minLength: '3',
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

export default class Settings extends Component {
    handleSubmit = () => {
      console.log('submit');
    };

    render() {
        return (
            <Section id={'settings'} title={'Settings'}>
                <Row colSize={'column'}>
                    <Content colSize={'column two'}>

                    </Content>
                </Row>
            </Section>
        )
    }
}

