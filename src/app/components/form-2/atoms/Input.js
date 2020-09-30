import React, { Component } from 'react';

export default class Input extends Component {
    constructor( props ){
        super( props );

        this.required = props.required;
        this.title = props.title;
        this.placeholder = props.placeholder;

        this.state = {
            isValid: false
        };

        this.initInput();
    }

    initInput = () => {
        if ( this.required ) {
            if ( this.placeholder ) {
                this.placeholder += ' *';
            } else if ( this.title ) {
                this.title += ' *';
            }
        }
    };

    handleChange = ( e ) => {
        this.setState({ isValid: e.target.checkValidity() });
    };

    render() {
        return(
            <label htmlFor={ this.props.id }>{ this.title }
                <input className={ this.state.isValid ? '' : 'invalid' }
                       id={ this.props.id }
                       name={ this.props.name }
                       type={ this.props.type }
                       placeholder={ this.placeholder }
                       minLength={ this.props.minLength }
                       required={ this.required }
                       onChange={ this.handleChange }/>
            </label>
        )
    }
}
