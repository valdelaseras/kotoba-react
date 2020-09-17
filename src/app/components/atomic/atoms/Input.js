import React from 'react';

const Input = props =>
    <label htmlFor={ props.id }>{ props.title }
    <input id={ props.id }
           name={ props.name }
           type={ props.type }
           placeholder={ props.placeholder }
           required={ props.required }/>
    </label>;

export default Input;

// TODO: This is not super reusable as a checkbox or radio input yet
// TODO: if required, add asterisk to input placeholder. Also why are other
//  standard HTML attributes not simply working when adding them to the template?
