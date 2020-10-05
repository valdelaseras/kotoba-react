import React from 'react';
import Button from '../atoms/Button';

const ButtonListItem = props =>
    <li>
        <Button type={ props.type }
                title={ props.title }
                link={ props.link }
                className={ props.className }/>
    </li>
;

export default ButtonListItem;
