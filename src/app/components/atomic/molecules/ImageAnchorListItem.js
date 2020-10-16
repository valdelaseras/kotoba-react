import React from 'react';
import ImageAnchor from '../atoms/ImageAnchor';

const ImageAnchorListItem = (props) => (
  <li>
    <ImageAnchor
      anchorClass={props.anchorClass}
      href={props.href}
      src={props.src}
      alt={props.title}
      title={props.title}
      imgClass={props.imgClass}
    />
  </li>
);

export default ImageAnchorListItem;
