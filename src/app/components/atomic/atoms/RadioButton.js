import React, { Component } from 'react';

export default class RadioButton extends Component {
    constructor( props ){
        super( props );

        this.title = props.title;
        this.required = props.required;

        this.initInput();
    }

    initInput = () => {
        if ( this.required ) {
            if ( this.title ) {
                this.title += ' *';
            }
        }
    };

    render() {
        return(
            <label htmlFor={ this.props.id }>{ this.title }
                <input className={ this.props.isValid ? '' : 'invalid' }
                       id={ this.props.id }
                       name={ this.props.name }
                       type='radio'
                       defaultChecked={ this.props.checked }
                       required={ this.required }
                       onChange={ this.handleChange }/>
            </label>
        )
    }
}

/**
 * NOTE: default checked in radio buttons must be passed like a 'normal html attribute'.
 * FormField has no initial value prop in this case. Example:
 *
 * <FormField>
     <RadioButton id={'rd-test'}
        title={'radio test'}
        name={'record'}/>
     <RadioButton id={'rd-test-two'}
        name={'record'}/>
     <RadioButton id={'rd-test-three'}
        checked={'checked'}
        name={'record'}/>
     </FormField>
 */

