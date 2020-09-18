import React, { Component } from 'react';
import './input.css';
import {validate} from "@babel/types";

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
            isValid: true
        };

        this.initInput();
    }

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
                       onKeyUp={ this.onkeyup.bind( this )}
                       onInvalid={ this.oninvalid.bind( this ) }/>
            </label>
        )
    }

    initInput = () => {
        if ( this.required ) {
            this.placeholder += ' *';
        }
    };

    oninvalid = () => {
        this.setState( { isValid: false } );
    };

    onkeyup = ( e ) => {
        this.setState({ isValid: e.target.checkValidity() });
    };
}


// TODO: This is not super reusable as a checkbox or radio input yet
