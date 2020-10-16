import React from 'react';

const Checkbox = (props) => (
  <label htmlFor={props.id}>
    {props.title} {props.required === 'required' ? ' *' : null}
    {props.text ? <p>{props.text}</p> : null}
    <input
      id={props.id}
      name={props.name}
      type="checkbox"
      defaultChecked={props.fieldValue}
      required={props.required}
    />
  </label>
);

export default Checkbox;

// TODO: ONLY IF required prop has been given, classname attr with invalid/valid props should be
//  passed. It makes no sense to have an invalid class by default on an optional checkbox
