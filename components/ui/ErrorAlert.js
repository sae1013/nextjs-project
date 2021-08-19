import React from 'react';

import classes from './ErrorAlert.module.scss';

function ErrorAlert(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default ErrorAlert;
