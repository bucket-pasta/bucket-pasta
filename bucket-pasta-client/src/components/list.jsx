import React from 'react';

import ListItem from './listItem.jsx';
import './list.scss'

export default (props) => {
  let clipboard = props.clipboard;
  let tabNumber = props.tabNumber;
  let deleteItem = props.deleteItem;
  let updateItem = props.updateItem;
  return (
    <ul>
      {clipboard.map((item,clipIdx) => <ListItem text={item} clipIdx={clipIdx} tabNumber={tabNumber} deleteItem={deleteItem} updateItem={updateItem}/>)}
    </ul>
  );
}
