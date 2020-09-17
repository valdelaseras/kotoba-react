import React, { Component } from 'react';

export default class Login extends Component {
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

// TODO: using Form / FormGroup right now for login form. Eventually create a nice reusable component from this with a password input, validation etc.
