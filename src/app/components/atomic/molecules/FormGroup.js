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
            fields: props.children.map( field => ({ name: field.name, valid: false }) )
        };
    }

    onValidityChange = ( e ) => {
      const { name } = e.target;
      const oldField = this.state.fields.find( field => field.name === name );
      oldField.valid = e.target.checkValidity();

      const invalidChildren = this.state.fields.filter( field => !field.valid );
      this.setState({ isValid: invalidChildren.length === 0 });
    };

    render() {
        return (
            <div className={ 'form-group ' + ( this.state.isValid ? '' : 'invalid' ) }
                 id={ this.id }
                 onChange={ this.onValidityChange }>
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
