import React from 'react';
import ListItem from './listItem';

export default (unicorn) => {

  return (
  <ul>
    { unicorn.list.map((val,idx) => {
      return <ListItem key={idx} text={val}/>
    })}
    </ul>
  );
}
