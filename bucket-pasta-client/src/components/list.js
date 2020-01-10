import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListItem from './listItem';

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
    }, [])

  // return < div />;

  return (
    <ul>
      {clipboard.map(person => <ListItem text={person}/>)}
    </ul>
  );
}


// export default (unicorn) => {

//   return (
//   <ul>
//     { unicorn.list.map((val,idx) => {
//       return 
//     })}
//     </ul>
//   );
// }
