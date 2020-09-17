import React from 'react';

const Fieldset = props =>
    <fieldset className={ props.class }>
        <legend><h2>{ props.title }</h2></legend>
        { props.children }
    </fieldset>;

export default Fieldset;
