import React, { Component } from 'react';

export default class FormGroup extends Component {
    constructor( props ){
        super( props );

        this.state = {
            id: props.id,
            isValid: false,
            fields: React.Children.toArray( props.children )
                .filter( child => this.elementIsOfType( child, 'FormField'))
                .map( field => {
                    return {
                        // The field names never change so we just get
                        // the names from the children props right away
                        name: field.props.children.props.name,
                        value: field.props.value,
                        isValid: false
                    }
            })
        };
    }

    /**
     * updatedState param is passed from the FormField children handleChange
     *
     * @param updatedState
     */
    handleChange = ( updatedState ) => {
        // Cloning the existing list of fields
        const fields =  Array.from( this.state.fields );
        // Find the field that executed this handleChange callback method
        const updatedField = fields.find( field => field.name === updatedState.name );

        // Then we assign the updatedState's values for isValid and fieldValue to those in the
        // cloned fields array ( per field )
        updatedField.isValid = updatedState.isValid;
        updatedField.value = updatedState.fieldValue;

        const updatedFields = {
            fields: fields,
            isValid: !fields.filter( field => !field.isValid ).length
        };
        // With this updated fields array, we can set the updated state of this component. If no fields
        // are left with isValid: false states, the group is valid
        this.setState( updatedFields );
        this.props.handleChange( Object.assign({ fields: this.state.fields, id: this.state.id }, updatedFields ));
    };

    /**
     * Returns true if the type param is found in the element param
     *
     * @param element
     * @param type
     * @returns {*|boolean}
     */
    elementIsOfType = ( element, type ) => {
        return (( element.type.name && element.type.name.includes( type )));
    };

    /**
     * In the render function we render any children that aren't FormFields as is,
     * without any added props. These don't need any validation, but we still want to render
     * them ( example: a P element in the form group with some additional information or what not )
     *
     * For any FormField elements that actually hold inputs, selects, checkboxes etc.,
     * we pass the handleChange function as an additional property .
     */
    render() {
        // Must be turned into an array, so if there is only 1 child we can still perform .filter
        // and .map methods on it ( as used in this.state.fields )
        const children = React.Children.toArray( this.props.children )
            .map( child => {
                if ( this.elementIsOfType( child, 'FormField')) {
                    return React.cloneElement( child, { handleChange: this.handleChange });
                } else { return child; }
            });

        return(
            <div className='form-group' id={ this.props.id }>
                { this.props.title ? <h2>{ this.props.title }</h2> : null }
                { children }
            </div>
        )
    }
}
