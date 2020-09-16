import React from 'react';
import Anchor from '../atoms/Anchor';

const AnchorListItem = props =>
    <li>
        <Anchor title={ props.title } href={ props.href }/>
    </li>;

export default AnchorListItem;
