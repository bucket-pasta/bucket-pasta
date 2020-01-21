import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import copyToClipboard from './copyToClipboard.js'

export default (props) => {
  let tabNumber = props.tabNumber;
  let clipIdx = props.clipIdx;
  let deleteItem = props.deleteItem;

  return (
    <li className="listItems">
      <div className="listItemText">{props.text}</div>
      <button onClick={() => copyToClipboard(props.text)}>
      <FontAwesomeIcon icon={faCopy} />
      </button>
      <button onClick={() => deleteItem(tabNumber, clipIdx)} >
      <FontAwesomeIcon icon={faTrash} />
      </button>
      <button>
        <FontAwesomeIcon icon={faEdit}/>
      </button>
    </li>
  );
}
