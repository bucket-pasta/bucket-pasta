import React, { useState } from 'react';
import './form.scss';

export default (props) => {
  let defaultValue = props.value;
  let placeholder = props.placeholder;
  let tabNumber = props.tabNumber;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    let newClipboardItem = e.target.value;
    setValue(newClipboardItem);
  }

  const handleSubmit = (e) => {
    props.formHandler(value, tabNumber);
    setValue('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value} type="text"
        placeholder={placeholder}
        >
      </input>
    </form>
  )
}
