import React, { Component } from 'react';
import Button from '../../components/atomic/atoms/Button';
import Input from '../../components/atomic/atoms/Input';
import Form from "../atomic/organisms/Form";
import FormGroup from "../atomic/molecules/FormGroup";

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
                            {/*{ LoginForm }*/}

                            <Form id={ 'login-form' } children={ formGroups }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const formGroups = [
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

// const LoginForm =
//         <form id="login-form">
//             <div className="form-group">
//                 <Input id={ 'username-input'}
//                        name={ 'username' }
//                        type={ 'text' }
//                        placeholder={ 'Enter your username' }
//                        autoComplete="off"
//                        minLength="1"
//                        autoFocus
//                        required="required"/>
//                 <Button type={ 'submit' }
//                         title={ 'Submit' }
//                         class={ 'btn-primary btn-main' }
//                         disabled="disabled"/>
//             </div>
//         </form>;

