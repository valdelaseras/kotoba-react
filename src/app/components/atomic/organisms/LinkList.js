import React from 'react';
import LinkListItem from '../../atomic/molecules/LinkListItem';

const LinkList = props =>
    <ul className={ props.class }>
        { props.children.map( child =>
            <LinkListItem key={ child.id } title={ child.title } href={ child.href }/>)
        }
    </ul>;

export default LinkList;
