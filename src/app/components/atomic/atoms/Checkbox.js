import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        // this.checked = props.checked;
        this.required = props.required;

        this.initCheckbox();
    }

    initCheckbox = () => {
      if ( this.required ) {
          if ( this.title ) {
              this.title += ' *';
          }
      }
    };

    render() {
        return(
            <label htmlFor={ this.props.id }>{ this.title }
                { this.props.text? <p>{ this.props.text }</p> : null }
                <input id={ this.props.id }
                       name={ this.props.name }
                       type='checkbox'
                       defaultChecked={ this.props.fieldValue }
                       required={ this.required }/>
            </label>
        )
    }
}

// TODO: ONLY IF required prop has been given, classname attr with invalid/valid props should be
//  passed. It makes no sense to have an invalid class by default on an optional checkbox
