import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => (

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">Aboard With A Bag</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/editors" className="nav-link">Editors</Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar" className="nav-link">Calendar</Link>
          </li>
          { /* Show link to Admin if logged in, otherwise Login and Register */ }
          {props.user &&
            (<li className="nav-item">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>)}
            {props.user &&
              (<li className="nav-item">
                <Link to="/" className="nav-link" onClick={props.handlers.logout}>Logout</Link>
              </li>)}
          {!props.user &&
            (<li className="nav-item">
              <Link to="/auth" className="nav-link">Login</Link>
            </li>)}
          {!props.user &&
            (<li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>)}
        </ul>
      </div>
    </nav>

);

export default NavBar;
