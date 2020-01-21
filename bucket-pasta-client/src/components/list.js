import React from 'react';

import ListItem from './listItem';
import './list.scss'

export default (props) => {
  let clipboard = props.clipboard;
  let tabNumber = props.tabNumber;
  let deleteItem = props.deleteItem
  return (
    <ul>
      {clipboard.map((item,clipIdx) => <ListItem text={item} clipIdx={clipIdx} tabNumber={tabNumber} deleteItem={deleteItem}/>)}
    </ul>
  );
}
