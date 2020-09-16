import React from 'react';
import Input from "../atoms/Input";

const FormGroup = props =>
    <div className="form-group" id={ props.id } >
        <h2>{ props.title }</h2>
        { props.children.map(child=>
            <Input id={ child.id }
                   title={ child.title }
                   name={ child.name }
                   placeholder={ child.placeholder }
                   required={ child.required }/>)}
    </div>;

export default FormGroup;

// TODO: 'Any' kind of element should be possible to use here.
//  A simple paragraph, buttons, checkboxes, whatever.
