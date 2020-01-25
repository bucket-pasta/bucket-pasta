import React, { useState, useEffect } from 'react';
import loadUserData from '../interfaces/loadInterfaces/load.js';
import saveUserData from '../interfaces/saveInterfaces/save.js';

import emptyUserObject from '../resources/emptyUserObject.js';

import List from './list.jsx';
import Form from './form.jsx';
import './tab.scss'

// username is for future feature, placeholder
let userName = '';

export default (props) => {
  // emptyUserObject is to make sure tabs is available when component mounts
  const [userObject, setUserObject] = useState(emptyUserObject);
  const [hasGetRun, setHasGetRun] = useState(false);
  const [online, setOnline] = useState(true);

  if(null){setOnline(true)}

  useEffect((online) => {
    if (online) {
      loadUserData(userName, setHasGetRun, 'server')
        .then(clipboardResponse => {
          setUserObject(clipboardResponse);
          setHasGetRun(true);
        })
    }
    else {
      loadUserData(userName, setHasGetRun, 'localStorage')
        .then(clipboardResponse => {
          setUserObject(clipboardResponse);
          setHasGetRun(true);
        })
    }
  }, [online])

  useEffect(() => {
    if (hasGetRun) {
      saveUserData(userObject, userName, 'localStorage')
      saveUserData(userObject, userName, 'server')
    };
  }, [userObject, hasGetRun])

  // Mapping tabs as a property in the userObject
  let tabs = userObject.data.tabs;

  let addOneItemToClipboard = (newItem, tabNumber) => {
    let changedObject = { ...userObject };
    changedObject.data.tabs[tabNumber].clipboard.unshift(newItem);
    setUserObject(changedObject);
  }

  let updateOneItem = (updatedItemTabIdx, updatedItemIdx, updatedItemText) => {
    let changedObject = { ...userObject };
    changedObject.data.tabs[updatedItemTabIdx].clipboard[updatedItemIdx] = updatedItemText;
    setUserObject(changedObject);
  }

  let removeOneItemFromClipboard = (removedItemTabIdx, removedItemIdx) => {
    let changedObject = { ...userObject };
    let modifiedClipboard = changedObject.data.tabs[removedItemTabIdx].clipboard.filter(
      (item, idx) => idx !== removedItemIdx)
    changedObject.data.tabs[removedItemTabIdx].clipboard = modifiedClipboard
    setUserObject(changedObject);
  }
  return (
    <ul>
      {tabs && tabs.map((tab, idx) => {
        return (
          <div key={idx} className="tab">
            <Form
              formHandler={addOneItemToClipboard}
              tabNumber={idx}
              placeholder={'Enter text'}
            />
            <h1>{tab.tabTitle}</h1>
            <List
              deleteItem={removeOneItemFromClipboard}
              updateItem={updateOneItem}
              clipboard={tab.clipboard}
              tabNumber={idx}
            />
          </div>)
      })}
    </ul>
  );
}
