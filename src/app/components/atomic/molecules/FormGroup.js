import React from 'react';
import Input from '../../atomic/atoms/Input'

const FormGroup = props =>
    <div className="form-group" id={ props.id } >
        { props.title ? <h2> { props.title } </h2> : null }
        { props.children.map(child =>
            <Input key={ child.id }
                   id={ child.id }
                   title={ child.title }
                   name={ child.name }
                   placeholder={ child.placeholder }
                   required={ child.required }/>)}
    </div>;

export default FormGroup;

// TODO: 'Any' kind of element should be possible to use here.
//  A simple paragraph, buttons, checkboxes, whatever.
