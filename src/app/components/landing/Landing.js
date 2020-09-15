import React, { Component } from 'react';

export class Landing extends Component {
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
                            { LoginForm }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const LoginForm =
        <form id="login-form">
            <div className="form-group">
                <label htmlFor="username-input">
                </label>
                <input name="username"
                       id="username-input"
                       type="text"
                       placeholder="Your username"
                       autoComplete="off"
                       minLength="1"
                       autoFocus
                       required/>
                <button className="btn btn-primary btn-main" type="submit" disabled>Submit</button>
            </div>
        </form>;

export default Landing;
