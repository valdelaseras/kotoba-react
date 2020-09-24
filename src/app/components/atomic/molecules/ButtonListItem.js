import React from 'react';
import Button from '../atoms/Button';

const ButtonListItem = props =>
    <li>
        <Button type={ props.type }
                title={ props.title }
                link={ props.link }
                class={ props.class }/>
    </li>
;

export default ButtonListItem;
