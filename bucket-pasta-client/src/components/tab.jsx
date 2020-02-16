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

  useEffect(() => {
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
  let tabs = userObject.tabs;

  let addOneItemToClipboard = (newItem, tabNumber) => {
    let changedObject = { ...userObject };
    let newItemObj = {
      displayName: "",
      theme: "",
      type: "string",
      content: newItem,
    }
    changedObject.tabs[tabNumber].pasties.unshift(newItemObj);
    setUserObject(changedObject);
  }

  let updateOneItem = (updatedItemTabIdx, updatedItemIdx, updatedItemText) => {
    let changedObject = { ...userObject };
    changedObject.tabs[updatedItemTabIdx].pasties[updatedItemIdx].content = updatedItemText;
    setUserObject(changedObject);
  }

  let removeOneItemFromClipboard = (removedItemTabIdx, removedItemIdx) => {
    let changedObject = { ...userObject };
    let modifiedClipboard = changedObject.tabs[removedItemTabIdx].pasties.filter(
      (item, idx) => idx !== removedItemIdx)
    changedObject.tabs[removedItemTabIdx].pasties = modifiedClipboard
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
            <h1>{tab.displayName}</h1>
            <List
              deleteItem={removeOneItemFromClipboard}
              updateItem={updateOneItem}
              pasties={tab.pasties}
              tabNumber={idx}
            />
          </div>)
      })}
    </ul>
  );
}
