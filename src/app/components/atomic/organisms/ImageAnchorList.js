import React from 'react';
import ImageLinkListItem from '../molecules/ImageAnchorListItem';

const ImageAnchorList = props =>
    <ul className={ props.class }>
        { props.children.map( child =>
            <ImageLinkListItem key={ child.id }
                               anchorClass={ child.anchorClass }
                               href={ child.href }
                               src={ child.src }
                               alt={ child.title }
                               title={ child.title }
                               imgClass={ child.imgClass }/>)
        }
    </ul>;

export default ImageAnchorList;
