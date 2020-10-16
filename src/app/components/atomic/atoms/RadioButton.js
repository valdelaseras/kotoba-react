import React from 'react';

const RadioButton = (props) => (
  <label htmlFor={props.id}>
    {props.title} {props.required === 'required' ? ' *' : null}
    {props.text ? <p>{props.text}</p> : null}
    <input
      className={props.isValid ? '' : 'invalid '}
      id={props.id}
      name={props.name}
      type="radio"
      defaultChecked={props.checked}
      required={props.required}
    />
  </label>
);

export default RadioButton;

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
