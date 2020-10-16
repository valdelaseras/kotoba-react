import React, { Component } from 'react';

export default class Form extends Component {
    constructor( props ){
        super( props );

        this.submitHandler = this.submitHandler.bind( this );

        this.state = {
            isValid: false,
            groups: this.getAllChildrenOfType( props.children, 'FormGroup' )
                .map( group => ({
                      id: group.props.id,
                      isValid: false
                }))
        };
    }

    // TODO: in the form on Settings, default settings are set in the constructor. If a
    //  user would change any setting, handleChange is called with updated fields. This
    //  means that this submit handler doesn't have any field(values), except the ones
    //  that had their new values updated and passed through handleChange. The same for
    //  the Selected exam settings form on Lobby. The rest of the fields are undefined.
    submitHandler( e ) {
        e.preventDefault();
        const data = this.state.groups.map( group => {
            if ( group.fields ) return group.fields.map( field => ({
                name: field.name,
                value: field.value
            }));
        }).flat();

        // Send the form submission data to the parent component, where a submitHandler can do
        // whatever with it
        this.props.onSubmit( data );
    };

    /**
     * updatedState is passed from FormGroups on change. The state of this form is valid once all formgroup children
     * are valid ( who in turn are valid once all form fields in the form group are valid, which is handled in FormGroup
     * handleChange )
     *
     * @param updatedState
     */
    handleChange = ( updatedState ) => {
       const groups = Array.from( this.state.groups );
       const updatedGroup = groups.find( group => group.id === updatedState.id );

       updatedGroup.fields = updatedState.fields;
       updatedGroup.isValid = updatedState.isValid;

       const updatedGroups = {
           groups: groups,
           isValid: !groups.filter( group => !group.isValid ).length
       };

       this.setState( updatedGroups );
    };

    // TODO: duplicate functionality ( see FormGroup )
    /**
     * Returns true if the type name param is found in the element param.
     *
     * Some form groups may contain children that are not form fields (like p or h3 tags etc).
     * The contents of these elements are apparently also prop children of those tags. These
     * just need to be rendered as is, so they return false in the first condition if the type
     * param is not actually string.
     *
     * If the intention is to actually do something with elements of type string, the second
     * statement will ensure the call does indeed return true.
     *
     * @param element
     * @param type
     * @returns {*|boolean}
     */
    elementIsOfType = ( element, type ) => {
        if ( typeof element === 'string' && type !== 'string' ) return false;
        else if ( typeof element === 'string' && type === 'string' ) return true;
        return (( element.type.name && element.type.name.includes( type )));
    };

    // TODO: duplicate functionality ( see FormGroup )
    /**
     * Get all children of a type. Recursively searches for prop children of the type param
     *
     * @param children
     * @param type
     * @returns {any[] | * | *}
     */
    getAllChildrenOfType( children, type ) {
        return React.Children.map( children, child => {
            if ( this.elementIsOfType( child, type ) ) {
                return child;
                // check if child has children props
            } else if ( child.props && child.props.children ) {
                return this.getAllChildrenOfType( child.props.children, type );
            }
        } );
    };

    // TODO: duplicate functionality ( see FormGroup )
    /**
     * Clone all children and pass a new prop to the children with the type param.
     *
     * @param children
     * @param type
     * @param props = the prop that needs to be passed to the cloned children of the type that is passed in the type
     *        param.
     * @returns {any[] | * | *}
     */
    recursiveCloneChildren = ( children, type, props ) => {
        return React.Children.map( children, child => {
            // If the child has type 'string' or doesn't have any children, it just needs to render as is
            if ( typeof child === 'string' || ( !this.elementIsOfType( child, type ) && !child.props.children ) ) {
                return child;
            // If the child is not the intended type but has children, search those children for children
            // with the type param
            } else if ( !this.elementIsOfType( child, type ) && child.props.children ) {
                return React.cloneElement( child, { children: this.recursiveCloneChildren( child.props.children, type, props )} );
            // If child type matches type param, clone it with the props param added
            } else if ( this.elementIsOfType( child, type ) ) {
                return React.cloneElement( child, props );
            }
        });
    };

    // TODO: render { children } ( all children ) here and clone children appropriately in functions above.
    //  The submit button is now outside of the form element ( as below ), which it shouldn't be ( see HTML )
    render() {
        // The submit button needs the state of the form to be passed a s a prop. Before we recursively clone all other
        // children, the submit button is filtered from the props.children array. This is only useful for forms where the
        // button is a direct descendant ( i.e. on Landing )
        const filteredChildren = React.Children.toArray( this.props.children )
            .filter( child => ( child.props.type !== 'submit'));

        // TODO: submit btn is only found on landing because it is a direct child of Form, unlike
        //  the buttons on lobby, settings and exam.
        const submitBtn = React.Children.toArray( this.props.children ).map( child => {
            if ( child.props.type === 'submit') { return React.cloneElement( child, {
                isValid: this.state.isValid
            });}
        });

        return (
            <form id={ this.props.id } onSubmit={ this.submitHandler.bind( this ) }>
                { this.recursiveCloneChildren( filteredChildren, 'FormGroup', {
                    handleChange: this.handleChange
                })}
                { submitBtn }
            </form>
        )
    }
}



