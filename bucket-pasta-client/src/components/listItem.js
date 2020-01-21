import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import copyToClipboard from './copyToClipboard.js'
import Form from './form.js';

export default (props) => {
  let [ isItemBeingEdited, setIsItemBeingEdited ] = useState(false);
  let tabNumber = props.tabNumber;
  let clipIdx = props.clipIdx;
  let deleteItem = props.deleteItem;
  let updateItem = props.updateItem;

  const middlePerson = (value) => {
    updateItem(tabNumber, clipIdx, value);
    setIsItemBeingEdited(!isItemBeingEdited);
  }

  return (
    <li className="listItems">
      <div className="listItemText">{
        isItemBeingEdited ? <Form value={props.text} formHandler={middlePerson}/> : props.text
        }</div>
      <button onClick={() => copyToClipboard(props.text)}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
      <button onClick={() => deleteItem(tabNumber, clipIdx)} >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button onClick={() => setIsItemBeingEdited(!isItemBeingEdited)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </li>
  );
}
