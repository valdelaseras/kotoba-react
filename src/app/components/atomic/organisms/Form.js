import React from 'react';
import FormGroup from '../../atomic/molecules/FormGroup';
import Button from '../../atomic/atoms/Button';

const Form = props =>
    <form id={ props.id }>
        { props.children.map(child =>
            <FormGroup key={child.id}
                       id={child.id}
                       title={child.title}
                       children={child.inputs}/>
        )}
        <Button type={props.btnType}
                title={props.btnTitle}
                class={props.btnClass}/>
    </form>;

export default Form;

// TODO: add fieldset + legend ( title )( as optional 'wrapper', children will then be child.fields? )
// TODO: also maybe add optional title to form itself ( not only for a form group)
