import React from 'react';
import './select.css';

const Select = (props) => (
  <label htmlFor={props.id}>
    {props.title} {props.required === 'required' ? ' *' : null}
    {props.text ? <p>{props.text}</p> : null}
    <select
      className={props.isValid ? '' : 'invalid'}
      id={props.id}
      required={props.required}
      name={props.name}
      defaultValue={props.fieldValue}
    >
      {props.children.map((child) => (
        <option key={child.id} value={child.title}>
          {child.title}
        </option>
      ))}
    </select>
  </label>
);

export default Select;

// TODO: Check what kind of HTML validity check is done for Select elements, if any.
//  Style element accordingly as well

/**
 * NOTE: To set the default selected option, pass the object[i].title in
 * FormField prop value
 */
