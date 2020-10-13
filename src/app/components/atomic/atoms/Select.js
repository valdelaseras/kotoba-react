import React, { Component } from 'react';

import './select.css';

export default class Select extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        this.required = props.required;

        this.initSelect();
    }

    initSelect = () => {
        if ( this.required ) {
            if ( this.title ) {
                this.title += ' *';
            }
        }
    };

    render() {
        return(
            <label htmlFor={ this.props.name }>{ this.title }
                { this.props.text? <p>{ this.props.text }</p> : null }
                <select className={ this.props.isValid ? '' : 'invalid' }
                        id={ this.props.id }
                        required={ this.required }
                        name={ this.props.name }
                        defaultValue={ this.props.fieldValue }>
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

// TODO: Check what kind of HTML validity check is done for Select elements, if any.
//  Style element accordingly as well

/**
 * NOTE: To set the default selected option, pass the object[i].title in
 * FormField prop value
 */
