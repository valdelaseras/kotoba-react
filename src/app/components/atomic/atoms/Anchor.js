import React from 'react';

const Anchor = (props) => (
  <a title={props.title} href={props.href}>
    {props.title}
  </a>
);

export default Anchor;
