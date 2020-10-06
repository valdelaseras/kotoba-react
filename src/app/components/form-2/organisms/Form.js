import React, { Component } from 'react';
import {elementIsOfType} from "../../../service/Utils";

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            disabled: true,
            formGroups: this.props.children
                .filter( child => elementIsOfType( child, 'FormGroup'))
                .map( formGroup => ({
                    id: formGroup.props.id,
                    valid: null
                }))
        };
    }

    submitHandler = ( e ) => {
      e.preventDefault();
    };

    // handleChange = ( e ) => {
    //     this.setState({
    //       isValid: e.target.checkValidity(),
    //       disabled: !e.target.checkValidity()
    //     });
    // };

    onFormGroupValidChange = ( valid, id ) => {
        const formGroups = Array.from( this.state.formGroups );
        Object.assign(
            formGroups.find(formGroup => formGroup.id === id ),
            { valid }
        );

        const formIsValid = !formGroups.filter( formGroup => !formGroup.valid ).length;

        this.setState({
            formGroups,
            isValid: formIsValid,
            disabled: !formIsValid
        });
    };

    render() {
        const children = React.Children.map( this.props.children, child => {
            const props = {};

            if ( elementIsOfType( child, 'FormGroup') ) {
                props['onValidChange'] = this.onFormGroupValidChange;
            } else if ( elementIsOfType( child, 'Button') ) {
                props['disabled'] = this.state.disabled;
            }

            return React.cloneElement( child, props );
        });

        return (
            <form className={ this.state.isValid ? '' : 'invalid'}
                  id={ this.props.id }
                  onSubmit={ this.submitHandler }>
                { children }
            </form>
        )
    }
}
