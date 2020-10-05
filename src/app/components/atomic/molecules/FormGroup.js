import React, { Component } from 'react';

export default class FormGroup extends Component {
    constructor( props ){
        super( props );

        this.state = {
            isValid: false
        };
    }

    render() {
        return(
            <div className={ 'form-group' + ( this.state.isValid ? '' : ' invalid' ) }
                 id={ this.props.id }
                 onChange={ this.handleChange }>
                { this.props.title ? <h2>{ this.props.title }</h2> : null }
                { this.props.children }
            </div>
        )
    }
}
