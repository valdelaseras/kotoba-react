import React from 'react';

const Input = (props) => (
  <label htmlFor={props.id}>
    {props.title}
    {props.text ? <p>{props.text}</p> : null}
    <input
      className={props.isValid ? '' : 'invalid '}
      defaultValue={props.fieldValue}
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={`${props.placeholder}${props.required === 'required' ? ' *' : ''}`}
      minLength={props.minLength}
      required={props.required}
    />
  </label>
);

export default Input;
