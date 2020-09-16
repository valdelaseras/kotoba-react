import React from 'react';
import AnchorListItem from '../molecules/AnchorListItem';

const AnchorList = props =>
    <ul className={ props.class }>
        { props.children.map( child =>
            <AnchorListItem key={ child.id } title={ child.title } href={ child.href }/>)
        }
    </ul>;

export default AnchorList;
