import React, { Component } from 'react';

export default class FormField extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false,
            fieldValue: ''
        };
    }

    handleChange = ( e ) => {
        this.setState({
            isValid: e.target.checkValidity(),
            fieldValue: e.target.value
        });
    };

    render() {
        const children = React.Children.map(this.props.children, child => {
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

/**
 * Note: Pass one form field in this component ( props.children )
 */

