import React from 'react';
import ButtonListItem from '../molecules/ButtonListItem';

const ButtonList = props =>
    <ul className={ 'btn-group ' + props.class }>
        { props.children.map( child =>
            <ButtonListItem key={ child.id }
                            class={ child.class }
                            title={ child.title }
                            type={ child.type }/>
        )}
    </ul>
;

export default ButtonList;
