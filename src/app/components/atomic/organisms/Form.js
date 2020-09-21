import React, { Component } from 'react';
import FormGroup from '../../atomic/molecules/FormGroup';
import Button from '../../atomic/atoms/Button';

export default class Form extends Component {
    constructor( props ) {
        super( props );

        this.id = props.id;
        this.btnType = props.btnType;
        this.btnTitle = props.btnTitle;
        this.btnClass = props.btnClass;
        this.children = props.children;

        this.state = {
            isValid: false,
            fields: props.children.map( formGroup => formGroup.inputs.map( field => ({ name: field.name, valid: false, value: null }) ) ).flat()
        };
    }

    onChange = ( e ) => {
        const { name, value } = e.target;
        const oldField = this.state.fields.find( field => field.name === name );
        oldField.valid = e.target.checkValidity();
        oldField.value = value;

        const invalidChildren = this.state.fields.filter( field => !field.valid );
        this.setState({ isValid: invalidChildren.length === 0 });
    };

    onInvalid= () => {
        this.setState( { isValid: false } );
    };

    test = ( e ) => {
        e.preventDefault();
        console.log( this.state.fields )
    };

    render() {
        return (
            <form id={ this.id }
                  onSubmit={ this.test }
                  onChange={ this.onChange }
                  onInvalid={ this.onInvalid }>
                { this.children.map( child =>
                    <FormGroup key={ child.name }
                               title={ child.title }
                               children={ child.inputs }/>
                )}
                <Button type={ this.btnType }
                        title={ this.btnTitle }
                        class={ this.btnClass }
                        disabled={ this.state.isValid ? '' : 'disabled' }/>
            </form>
        )
    }
}

// TODO: add fieldset + legend ( title )( as optional 'wrapper', children will then be child.fields? )
// TODO: also maybe add optional title to form itself ( not only for a form group)
