import React, { Component } from 'react';
import Input from '../../atomic/atoms/Input'

export default class FormGroup extends Component {
    constructor( props ) {
        super( props );

        this.id = props.id;
        this.title = props.title;
        this.children = props.children;

        this.state = {
            isValid: false,
            fields: props.children.map( field => ({
                name: field.name,
                valid: false,
                value: undefined
            }))
        };
    }

    handleChange = ( e ) => {
        const { name } = e.target;
        const field = this.state.fields.find( field => field.name === name );
        const invalidChildren = this.state.fields.filter( field => !field.valid );

        field.valid = e.target.checkValidity();

        this.setState({ isValid: invalidChildren.length === 0 });
    };

    render() {
        return (
            <div className={ 'form-group ' + ( this.state.isValid ? '' : 'invalid' ) }
                 id={ this.id }
                 onChange={ this.handleChange }>
                { this.title ? <h2>{ this.title }</h2> : null }
                { this.children.map( child =>
                    <Input key={ child.id }
                           id={ child.id }
                           title={ child.title }
                           type={ child.type }
                           name={ child.name }
                           minLength={ child.minLength }
                           placeholder={ child.placeholder }
                           required={ child.required }/>)}
            </div>
        )
    }
}

// TODO: 'Any' kind of element should be possible to use here.
//  A simple paragraph, buttons, checkboxes, whatever.


// TODO: replace this FormGroup with new one in /form-2 once code has been refactored
