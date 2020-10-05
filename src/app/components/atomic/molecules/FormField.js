import React, { Component } from 'react';

export default class FormField extends Component {
    constructor( props ){
        super( props );

        this.initialValue = props.value;

        this.state = {
            isValid: false,
            fieldValue: this.initialValue
            // TODO: add prop to the formfield to set a default value. So this is different for
            //  checkboxes, radio buttons, selects and inputs
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

// TODO: fieldValue is empty string by default which works for inputs. But other elements like
//  checkbox and radiobuttons have a default selected attribute and select has options with a
//  'selected' attribute for default selection.
