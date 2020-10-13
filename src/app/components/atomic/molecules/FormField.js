import React, { Component } from 'react';

/**
 * Important notes:
 * - A FormField MUST be wrapped in a FormGroup component
 * - You should only pass one form field element in one FormField
 */
export default class FormField extends Component {
    constructor( props ){
        super( props );

        // this.handleChange = this.handleChange.bind(this);
        /**
         * For any type of form field element ( input, select, checkbox, radiobutton ), a
         * value={'somevalue'} may be set on the FormField tag. This serves as the initial value and sets
         * defaultSelected, defaultChecked etc. on the form field elements as desired.
         */
        this.state = {
            isValid: false,
            fieldValue: props.value,
            name: props.children.props.name
            // NOTE: this only works if formfield only has 1 child
            //  ( see if it works with radio buttons for example )
        };
    }

    handleChange = ( e ) => {
        // Save the value and validity state in newState so we can pass it to the handleChange
        // function of FormGroup, the parent element. The name of the form field child does not
        // update, so it is excluded here
        const updatedState = {
            isValid: e.target.checkValidity(),
            fieldValue: e.target.value
        };

        // Set the actual new states in this component
        this.setState( updatedState );

        // Send the new state and the form field child name up the component hierarchy to FormGroup
        this.props.handleChange( Object.assign({ name: this.state.name }, updatedState ) );
    };

    render() {
        const children = React.Children.map( this.props.children, child => {
            return React.cloneElement( child, {
                isValid: this.state.isValid,
                fieldValue: this.state.fieldValue
            });
        });

        return (
            <div className="field"
                 onChange={ this.handleChange }>
                { children }
            </div>
        )
    }
}


