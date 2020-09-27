import React, { Component } from 'react';

export default class RadioButton extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        this.checked = props.checked;
        this.required = props.required;

        this.state = {
            isValid: false
        };

        this.initInput();
    }

    initInput = () => {
        if ( this.required ) {
            if ( this.title ) {
                this.title += ' *';
            }
        }
    };

    handleChange = ( e ) => {
        this.setState({ isValid: e.target.checkValidity() });
    };

    render() {
        return(
            <label htmlFor={ this.props.id }>{ this.title }
                <input className={ this.props.class + ( this.state.isValid ? '' : ' invalid' )}
                       id={ this.props.id }
                       name={ this.props.name }
                       type='radio'
                       defaultChecked={ this.checked }
                       required={ this.required }
                       onChange={ this.handleChange }/>
            </label>
        )
    }
}

