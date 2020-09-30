import React, { Component } from 'react';
import {elementIsOfType} from "../../../service/Utils";

export default class FormGroup extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            fields: this.props.children
                .filter( child => elementIsOfType( child, 'Input' ) || elementIsOfType( child, 'Select' ) )
                .map( field => ({
                    name: field.props.name,
                    value: null,
                    valid: null
                }) )
        };
    }

    handleChange = ( e ) => {
        const fields = Array.from( this.state.fields );
        Object.assign(
            fields.find( field => field.name === e.target.name ),
            { valid: e.target.checkValidity() }
        );

        const valid = !fields.filter( field => !field.valid ).length;
        this.setState({
            fields,
            isValid: valid
        } );

        this.props.onValidChange( valid, this.props.id );
    };

    render() {
        return(
            <div className={ 'form-group' + ( this.state.isValid ? '' : ' invalid' ) }
                 id={ this.props.id }
                 onChange={ this.handleChange }>
                { this.props.title ? <h2>{ this.props.title }</h2> : null }
                { this.props.children }
            </div>
        )
    }
}
