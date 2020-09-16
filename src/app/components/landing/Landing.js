import React, { Component } from 'react';

import Button from '../../components/atomic/atoms/Button';
import Form from "../atomic/organisms/Form";

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
    titleClass = "font-xxl";

    render() {
        return (
            <div className="Landing">
                <div className="column">
                    <div className="column">
                        <div className="content">
                            <h1 className={ this.titleClass }>Kotoba</h1>
                            <h2>Makes cramming easier</h2>
                        </div>
                    </div>

                    <div className="column two">
                        <div className="content">
                            <p>
                                Memorize Japanese characters and vocabulary. Use the default exams, generate new exams
                                based on your results or create a custom exam yourself!
                            </p>

                            <Form id={ 'login-form' } children={ formGroup }/>
                            {/*TODO: this button belongs inside this ^ form > formgroup */}
                            <Button type={ 'submit' }
                                    title={ 'Submit' }
                                    class={ 'btn-primary btn-main' }
                                    disabled="disabled"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
