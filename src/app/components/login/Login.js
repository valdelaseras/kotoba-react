import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (
            <form id="login-form">
              <div className="form-group">
                  <label htmlFor="username-input">
                  </label>
                  <input name="username" id="username-input" type="text" placeholder="Your username" autoComplete="off" minLength="1" autoFocus required/>
                  <button className="btn btn-primary btn-main"
                          type="submit">Submit</button>
              </div>
            </form>
        )
    }
}

export default Login;
