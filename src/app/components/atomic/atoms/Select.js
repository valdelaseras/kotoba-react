import React, { Component } from 'react';

import './select.css';

export default class Select extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        this.required = props.required;

        this.state = {
            isValid: false
        };

        this.initSelect();
    }

    initSelect = () => {
        if ( this.required ) {
            if ( this.title ) {
                this.title += ' *';
            }
        }
    };

    handleChange = ( e ) => {
        this.setState({ isValid: e.target.checkValidity() });
    };

    render() {
        return(
            <label htmlFor={ this.props.name }>{ this.title }
                { this.props.text? <p>{ this.props.text }</p> : null }
                <select id={ this.props.id }
                        onChange={ this.handleChange }
                        required={ this.required }
                        name={ this.props.name }>
                        { this.props.children.map( child =>
                        <option key={ child.id }
                                value={ child.title }>
                            { child.title }
                        </option>
                    )}
                </select>
            </label>
        )
    }
}

// TODO: add default checked option
