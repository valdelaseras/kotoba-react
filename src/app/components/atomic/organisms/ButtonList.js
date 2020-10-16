import React from 'react';
import ButtonListItem from '../molecules/ButtonListItem';

const ButtonList = (props) => (
  <ul className={'btn-group ' + props.class}>
    {props.children.map((child) => (
      <ButtonListItem
        key={child.id}
        className={child.className}
        title={child.title}
        link={child.link}
        type={child.type}
      />
    ))}
  </ul>
);
export default ButtonList;
