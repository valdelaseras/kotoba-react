import React, { Component } from 'react';

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
    title = "Kotoba";
    subtitle = "Makes cramming easier";

    render() {
        return (
            <div className="Landing">
                <div className="column">
                    <div className="column">
                        <div className="content">
                            <h1 className={ this.titleClass }>{ this.title }</h1>
                            <h2>{ this.subtitle }</h2>
                        </div>
                    </div>

                    <div className="column two">
                        <div className="content">
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
