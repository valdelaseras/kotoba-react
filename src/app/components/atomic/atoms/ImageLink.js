import React from 'react';

const ImageLink = props =>
    <a className={ props.anchorClass } tabIndex="0"
       href={ props.href }>
        <img src={ props.src } alt={ props.title + " image" } title={ props.title } className={ props.imgClass }/>
    </a>;

export default ImageLink;
