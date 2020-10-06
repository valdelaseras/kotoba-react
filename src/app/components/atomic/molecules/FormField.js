import React, { Component } from 'react';

/**
 * Pass one form field element in this component
 */
export default class FormField extends Component {
    constructor( props ){
        super( props );

        /**
         * For any type of form field element ( input, select, checkbox, radiobutton ), a
         * value={'somevalue'} may be set on the FormField tag. This serves as the initial value and sets
         * defaultSelected, defaultChecked etc. on the form field elements as desired.
         */
        this.state = {
            isValid: false,
            fieldValue: props.value,
            name: props.children.props.name
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
            const props = {
                isValid: this.state.isValid,
                fieldValue: this.state.fieldValue
            };

            return React.cloneElement( child, props );
        });

        return (
            <div className="field"
                 onChange={ this.handleChange }>
                { children }
            </div>
        )
    }
}

// TODO: if form field is not wrapped in a FormGroup component, it now breaks on this.props.handleChange.
//  Even though a form field "should" be wrapped in a form group ( at least in this project ), it would
//  be nice if the form fields + children would also still work as standalone components

