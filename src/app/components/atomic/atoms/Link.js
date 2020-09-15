import React from 'react';

const Link = props =>
    <a title={ props.title } href={ props.href }>
        { props.title }
    </a>;

export default Link;
