import React, { useState, useEffect } from 'react';
import getOneUser from '../resources/getOneUser.js';
import emptyUserObject from '../resources/emptyUserObject.js';

import List from './list';
import Form from './form';
import './tab.scss'

// username is for future feature, placeholder
let userName = '';

export default (props) => {
  // emptyUserObject is to make sure tabs is available when component mounts
  const [userObject, setUserObject] = useState(emptyUserObject);

  useEffect(() => {
    getOneUser(setUserObject, userName);
  }, [])

  // Mapping tabs as a property in the userObject
  let tabs = userObject.data.tabs;

  let addOneItemToClipboard = (newItem, tabNumber) => {
    let changedObject = { ...userObject };
    changedObject.data.tabs[tabNumber].clipboard.push(newItem);
    setUserObject(changedObject);
  }

  return (
    <ul>
      {tabs && tabs.map((tab, idx) => {
        return (
          <div className="tab">
            <Form
              addOneItemToClipboard={addOneItemToClipboard}
              tabNumber={idx} />
            <h1>{tab.tabTitle}</h1>
            <List
              clipboard={tab.clipboard} />
          </div>)
      })}
    </ul>
  );
}
