import React, { useState } from 'react';
import './form.scss';

export default (props) => {
  let tabNumber = props.tabNumber;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let newClipboardItem = e.target.value;
    setValue(newClipboardItem);
  }

  const handleSubmit = (e) => {
    props.addOneItemToClipboard(value, tabNumber);
    setValue('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value} type="text"
        placeholder={`This is where your pastie goes, we are in tab number ${tabNumber}`}>
      </input>
    </form>
  )
}
