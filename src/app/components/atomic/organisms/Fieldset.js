import React from 'react';

const Fieldset = (props) => (
  <fieldset className={props.class}>
    <legend>
      <h2>{props.title}</h2>
    </legend>
    {props.children}
  </fieldset>
);

export default Fieldset;

// TODO: is there really much of a point to turn this into a component?
