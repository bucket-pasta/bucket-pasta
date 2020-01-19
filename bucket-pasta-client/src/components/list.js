import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListItem from './listItem';
import './list.scss'

export default (props) => {
  const [clipboard, setClipboard] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1234/clipboard`)
      .then(res => {
        // console.log(res.data.clipboard);
        const clipboardResponse = res.data.clipboard;
        setClipboard(clipboardResponse);
        console.log(clipboard);
      })
    }, [clipboard])


  return (
    <ul>
      {clipboard.map(person => <ListItem text={person}/>)}
    </ul>
  );
}
