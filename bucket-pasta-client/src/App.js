import React from 'react';
import './App.css';
import List from './components/list.js';

function App() {
  let arr = ["hello", "goodbye", "oof", "yikes"];
  return (<List list={arr}/>);
}

export default App;
