import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { } from 'react-router'
import './App.css';
import Tab from './components/tab.jsx';
import LoginSignup from './components/loginSignup.jsx'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Tab />
        </Route>
        <Route path="/login">
          <LoginSignup />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
