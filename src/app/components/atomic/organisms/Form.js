import React, { Component } from 'react';

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            disabled: true
        };
    }

    submitHandler = ( e ) => {
      e.preventDefault();
    };

    render() {
        return (
            <form className={ this.state.isValid ? '' : 'invalid'}
                  id={ this.props.id }
                  onSubmit={ this.submitHandler }>
                { this.props.children }
            </form>
        )
    }
}
