import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AbwabHeader from './AbwabHeader.js';
import TuiCalendar from './TuiCalendar.js';
import TuiImageEditor from './TuiImageEditor.js';
import TuiEditor from './TuiEditor.js';
import TechStack from './TechStack.js';

function App() {
  return (
    <div className="App">

      <Router>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand">Aboard With A Bag</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/editors" className="nav-link">Editors</Link>
              </li>
              <li className="nav-item">
                <Link to="/calendar" className="nav-link">Calendar</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="main container">
          <Switch>
            <Route path="/editors">
              <TuiEditor />
              <TuiImageEditor />
            </Route>
            <Route path="/calendar">
              <TuiCalendar />
            </Route>
            <Route path="/">
              <AbwabHeader />
              <TechStack />
            </Route>
          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
