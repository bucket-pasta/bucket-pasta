import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getOneUser from '../helpers/getOneUser.js';

import List from './list';
import './tab.scss'
import { faTablets } from '@fortawesome/free-solid-svg-icons';

let userName = '';

export default (props) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    getOneUser(setTabs, userName);
  }, [])

  return (
    <ul>
      {tabs && tabs.map(tab => {
        return (
          <div className="tab">
            <h1>{tab.tabTitle}</h1>
            <List clipboard={tab.clipboard} />
          </div>)
      })}
    </ul>
  );
}
