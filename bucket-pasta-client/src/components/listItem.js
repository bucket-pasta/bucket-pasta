import React from 'react';
export default (props) => {
  return (
  <li key={props.key} className="listItems">{props.text}</li>
  );
}
