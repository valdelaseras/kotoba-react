import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = (props) => (
  <button
    type={props.type}
    title={props.title}
    className={'btn ' + props.className}
    disabled={props.isValid === false ? 'disabled' : ''}
    onClick={() => navigate(props)}
  >
    {props.title}
  </button>
);

const navigate = (props) => {
  if (props.link) {
    props.history.push(props.link);
  }
};

export default withRouter(Button);

// TODO: 'back' in SecNav is just / now, so it's not truly 'back'. I think I'll need to change
//  my use of the router because secnav/nav/footer are 'outside' of Router (?)
