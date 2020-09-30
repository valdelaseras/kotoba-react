import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        this.checked = props.checked;
        this.required = props.required;

        this.state = {
            isValid: false
        };

        this.initCheckbox();
    }

    initCheckbox = () => {
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
                { this.props.text? <p>{ this.props.text }</p> : null }
                <input id={ this.props.id }
                       name={ this.props.name }
                       type='checkbox'
                       defaultChecked={ this.checked }
                       required={ this.required }
                       onChange={ this.handleChange }/>
            </label>
        )
    }
}
