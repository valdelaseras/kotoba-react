import React from 'react';
import ImageLink from '../../atomic/atoms/ImageLink';

const ImageLinkList = props =>
    <li>
        <ImageLink anchorClass={ props.anchorClass }
                   href={ props.href }
                   src={ props.src }
                   alt={ props.title }
                   title={ props.title }
                   imgClass={ props.imgClass }/>
    </li>;

export default ImageLinkList;
