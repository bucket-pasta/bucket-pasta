import React from 'react';

import ListItem from './listItem.jsx';
import './list.scss'

export default (props) => {
  let pasties = props.pasties;
  let tabNumber = props.tabNumber;
  let deleteItem = props.deleteItem;
  let updateItem = props.updateItem;
  return (
    <ul>
      {pasties.map((item,clipIdx) => <ListItem key={clipIdx} text={item.content} clipIdx={clipIdx} tabNumber={tabNumber} deleteItem={deleteItem} updateItem={updateItem}/>)}
    </ul>
  );
}
