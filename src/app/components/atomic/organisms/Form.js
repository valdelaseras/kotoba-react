import React, { Component } from 'react';

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            groups: React.Children.toArray( props.children )
                .filter( child => this.elementIsOfType( child,'FormGroup' ))
                .map( group => {
                    return {
                          id: group.props.id,
                          isValid: false
                    }
            })
        };
    }

    handleChange = ( updatedState ) => {
       const groups = Array.from( this.state.groups );
       const updatedGroup = groups.find( group => group.id === updatedState.id );

       updatedGroup.isValid = updatedState.isValid;

       const updatedGroups = {
           groups: groups,
           isValid: !groups.filter( group => !group.isValid ).length
       };

       this.setState( updatedGroups );
    };

    submitHandler = ( e ) => {
        e.preventDefault();
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

    render() {
        const children = React.Children.toArray( this.props.children )
            .map( child => {
                if ( this.elementIsOfType( child, 'FormGroup')) { return React.cloneElement( child, { handleChange: this.handleChange });}
                if ( child.props.type === 'submit') { return React.cloneElement( child, {
                    isValid: this.state.isValid
                });}
                else { return child; }
        });

        return (
            <form id={ this.props.id }
                  onSubmit={ this.submitHandler }>
                { children }
            </form>
        )
    }
}
