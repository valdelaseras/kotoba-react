import React, { Component } from 'react';

export default class Input extends Component {
    constructor( props ) {
        super( props );

        this.id = props.id;
        this.title = props.title;
        this.name = props.name;
        this.type= props.type;
        this.placeholder = props.placeholder;
        this.required = props.required;
        this.minLength = props.minLength;

        this.state = {
            isValid: false
        };

        this.initInput();
    }

    // TODO: is this impure?
    initInput = () => {
        if ( this.required ) {
            this.placeholder += ' *';
        }
    };

    handleChange = ( e ) => {
        this.setState({ isValid: e.target.checkValidity() });
    };

    render() {
        return (
            <label htmlFor={ this.id }>{ this.title }
                <input className={ this.state.isValid ? '' : 'invalid' }
                       id={ this.id }
                       name={ this.name }
                       type={ this.type }
                       placeholder={ this.placeholder }
                       minLength={ this.minLength }
                       required={ this.required }
                       onChange={ this.handleChange }/>
            </label>
        )
    }
}


// TODO: This is not super reusable as a checkbox or radio input yet
// TODO: if form pristine, state isValid is false but I guess the 'invalid' styling shouldnt display yet
