import React from 'react';

import ListItem from './listItem';
import './list.scss'

export default (props) => {
  let clipboard = props.clipboard;
  return (
    <ul>
      {clipboard.map(item => <ListItem text={item}/>)}
    </ul>
  );
}
