import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import copyToClipboard from './copyToClipboard.js'


export default (props) => {
  return (
    <li className="listItems">
      <div className="listItemText">{props.text}</div>
      <button onClick={() => copyToClipboard(props.text)}>
      <FontAwesomeIcon icon={faCopy} />
      </button>
    </li>
  );
}
