import React, { useState, useEffect } from 'react';
// import getOneUser from '../resources/getOneUser.js';
import loadUserData from '../interfaces/loadInterfaces/load.js';
import saveUserData from '../interfaces/saveInterfaces/save.js';

// import postOneUser from '../resources/postOneUser.js';
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

  useEffect(() => {
    // getOneUser(setUserObject, userName, setHasGetRun);
    loadUserData(userName, setHasGetRun, 'localStorage')
      .then(clipboardResponse => {
        setUserObject(clipboardResponse);
        setHasGetRun(true);
      })
    // loadUserData(userName, setHasGetRun, 'server')
    //   .then(clipboardResponse => {
    //     setUserObject(clipboardResponse);
    //     setHasGetRun(true);
    //   })
  }, [])

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
          <div className="tab">
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
