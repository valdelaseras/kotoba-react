import React from 'react';

const Button = props =>
        <button type={ props.type }
                title={ props.title }
                className={ "btn " + props.class }
                disabled={ props.disabled }>
                { props.title }
        </button>;

export default Button;
