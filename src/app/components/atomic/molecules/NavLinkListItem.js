import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkListItem = (props) => (
  <li>
    <NavLink key={props.id} title={props.title} to={props.to}>
      {props.title}
    </NavLink>
  </li>
);

export default NavLinkListItem;
