import React from 'react';
import Button from '../atoms/Button';

const ButtonListItem = props =>
    <li>
        <Button type={ props.type }
                title={ props.title }
                class={ props.class }/>
    </li>
;

export default ButtonListItem;
