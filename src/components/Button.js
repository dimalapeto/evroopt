import React from 'react';
import './styles/Button.css';

function Button(props) {
  return(
      <div><a href="/" className={"btn " + props.style}>{props.name}</a></div>
    )
};
export default Button