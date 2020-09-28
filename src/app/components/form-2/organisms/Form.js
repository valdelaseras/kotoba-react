import React, { Component } from 'react';

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
        };
    }

    submitHandler = () => {
      console.log('submit');
    };

    handleChange = () => {
      console.log('change handler');
    };

    onInvalid = () => {
      this.setState({ isValid: false });
    };

    render() {
        return(
            <form id={ this.props.id }
                  onSubmit={ this.submitHandler }
                  onChange={ this.handleChange }
                  onInvalid={ this.onInvalid }>
                { this.props.children }
            </form>
        )
    }
}
