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
            fields: props.children.map( formGroup =>
                formGroup.inputs.map( field => ({
                    name: field.name,
                    valid: false,
                    value: null
                }))).flat()
        };
    }

    handleChange = (e ) => {
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

    render() {
        return (
            <form id={ this.id }
                  onChange={ this.handleChange }
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
