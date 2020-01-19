import React from 'react';
import './App.css';
import Tab from './components/tab.js';

function App() {
  let arr = ["hello", "goodbye", "oof", "yikes"];
  return (<Tab list={arr}/>);
}

export default App;
