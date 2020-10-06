import React, { Component } from 'react';

export default class FormGroup extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false
        };
    }

    handleChange = ( updatedState ) => {
        const formFields =  Array.from( this.getFormFields() );

        console.log(updatedState);
    };

    /**
     * Filter the children that are actually FormFields
     *
     * @returns { Object }
     */
    getFormFields = () => {
        return this.props.children.filter( child => ( child.type.name && child.type.name.includes('FormField')));
    };

    // elementIsOfType = ( element, type ) => {
    //     return (
    //         (element.type.name && element.type.name.includes( type ))
    //     );
    // };

    /**
     * In the render function we render any children that aren't FormFields as is,
     * without any added props. These don't need any validation, but we still want to render
     * them ( example: a P element in the form group with some additional information or what not )
     *
     * For any FormField elements that actually hold inputs, selects, checkboxes etc.,
     * we pass the handleChange function as an additional property .
     */
    render() {
        const children = this.props.children
            .map( child => {
                if ( child.type.name && child.type.name.includes('FormField')) {
                    const props = {
                        handleChange: this.handleChange
                    };

                    return React.cloneElement( child, props );
                } else {
                    return child;
                }
            });

        return(
            <div className={ 'form-group' + ( this.state.isValid ? '' : ' invalid' ) }
                 id={ this.props.id }
                 onChange={ this.handleChange }>
                { this.props.title ? <h2>{ this.props.title }</h2> : null }
                { children }
            </div>
        )
    }
}
