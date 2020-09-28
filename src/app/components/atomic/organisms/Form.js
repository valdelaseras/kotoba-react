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
        this.submitHandler = props.submitHandler;

        this.state = {
            isValid: false,
            fields: props.children.map( child =>
                child.inputs.map( field => ({
                    name: field.name,
                    valid: false,
                    value: null
                }))).flat()
        };
    }

    handleChange = ( e ) => {
        const { name, value } = e.target;
        const field = this.state.fields.find( field => field.name === name );
        const invalidChildren = this.state.fields.filter( field => !field.valid );

        field.valid = e.target.checkValidity();
        field.value = value;

        this.setState({ isValid: invalidChildren.length === 0 });
    };

    onInvalid = () => {
        this.setState( { isValid: false } );
    };

    submit = ( e ) => {
      e.preventDefault();
      this.submitHandler( this.state.fields );
    };

    render() {
        return (
            <form id={ this.id }
                  onSubmit={ this.submit }
                  onChange={ this.handleChange }
                  onInvalid={ this.onInvalid }>
                { this.children.map( child =>
                    <FormGroup key={ child.name }
                               title={ child.title }
                               children={ child.inputs }>
                    </FormGroup>
                )}
                <Button type={ this.btnType }
                        title={ this.btnTitle }
                        class={ this.btnClass }
                        disabled={ this.state.isValid ? '' : 'disabled' }/>
            </form>
        )
    }
}

// TODO: replace this Form with new one in /form-2 once code has been refactored

