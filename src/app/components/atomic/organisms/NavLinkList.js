import React from 'react';
import NavLinkListItem from '../molecules/NavLinkListItem';

const NavLinkList = props =>
  <ul className={ props.class }>
      { props.children.map( child =>
        <NavLinkListItem key={ child.id } title={ child.title } to={ child.to }/>)
      }
  </ul>;

export default NavLinkList;
