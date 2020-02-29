import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { } from 'react-router'
import './App.css';
import Tab from './components/tab.jsx';
import LoginSignup from './components/loginSignup.jsx'
import Paperbase from './paperbase/Paperbase'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Link to="/login">signup</Link>
        <br/>
        <Link to="/paperbase">Paperbase</Link>
          <Tab />
        </Route>
        <Route path="/login">
          <LoginSignup />
        </Route>
        <Route path="/paperbase">
          <Paperbase />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
