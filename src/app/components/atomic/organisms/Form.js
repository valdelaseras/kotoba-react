import React, { Component } from 'react';

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            disabled: true,
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
           isValid: !groups.filter( group => !group.isValid).length
       };

       this.setState( updatedGroups );
    };

    handleDisabled = ( e ) => {
      // if valid, props.disabled = false, Button component then updates disdable state
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
                if ( this.elementIsOfType( child, 'FormGroup')) {
                    return React.cloneElement( child, { handleChange: this.handleChange });
                } else if ( this.elementIsOfType( child, 'Button' )) {
                    return React.cloneElement( child, { handleDisabled: this.handleDisabled });
                } else {
                    return child;
                }
        });

        return (
            // TODO: remove this invalid classname, instead just pass state info
            //  to the button and enable/disable
            <form className={ this.state.isValid ? '' : 'invalid'}
                  id={ this.props.id }
                  onSubmit={ this.submitHandler }>
                { children }
            </form>
        )
    }
}
