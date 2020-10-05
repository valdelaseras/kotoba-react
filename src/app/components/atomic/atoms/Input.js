import React, { Component } from 'react';

export default class Input extends Component {
    constructor( props ){
        super( props );

        this.required = props.required;
        this.title = props.title;
        this.placeholder = props.placeholder;

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

    render() {
        return(
            <label htmlFor={ this.props.id }>{ this.title }
                <input className={ this.props.isValid ? '' : 'invalid'}
                       defaultValue={ this.props.fieldValue }
                       id={ this.props.id }
                       name={ this.props.name }
                       type={ this.props.type }
                       placeholder={ this.placeholder }
                       minLength={ this.props.minLength }
                       required={ this.required }
                />
            </label>
        )
    }
}
