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

// TODO: works but rather useless as it is now. I could however use these
//  form groups to build up the wizard forms for example ( form group acting
//  as a step and using it to increment/decrement progress counter etc. )
