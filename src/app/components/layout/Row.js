import React from 'react';

const Row = props =>
    <div className={ props.colSize }>
        { props.children }
    </div>
;

export default Row;
