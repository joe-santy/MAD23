import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => (

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">MA District 23</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link to="/docs" className="nav-link">Docs</Link>
          </li>
{ /* Show link to Admin, Logout, and username if logged in, otherwise Login */ }
          {props.user &&
            (<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>)}
          {props.user &&
            (<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/" className="nav-link" onClick={props.handlers.logout}>Logout</Link>
            </li>)}
          {!props.user &&
            (<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/auth" className="nav-link">Login</Link>
            </li>)}
          {/*!props.user &&
            (<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/register" className="nav-link">Register</Link>
            </li>)*/}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link">{(props.lang === 'EN') ? 'ES' : 'EN'}</Link>
            </li>
          </li>
          <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
            {props.user &&
              (<li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link">{props.user}</Link>
              </li>)}
          </li>
        </ul>
      </div>
    </nav>

);

export default NavBar;
