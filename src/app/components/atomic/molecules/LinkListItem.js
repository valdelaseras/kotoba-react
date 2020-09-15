import React from 'react';
import Link from '../../atomic/atoms/Link';

const LinkListItem = props =>
    <li>
        <Link title={ props.title } href={ props.href }/>
    </li>;

export default LinkListItem;
