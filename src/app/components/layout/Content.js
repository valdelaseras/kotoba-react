import React from 'react';

const Content = (props) => (
  <div className={props.colSize}>
    <div className="content">{props.children}</div>
  </div>
);
export default Content;
