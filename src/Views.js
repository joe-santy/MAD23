import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Auth from './Views/Auth.js';
import Admin from './Views/Admin.js';
import Register from './Views/Register.js';
import Home from './Views/Home.js';
import Blog from './Views/Blog.js';

const Views = (props) => (

    /* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
    <div className="main container">
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/auth">
          <Auth handlers={props.handlers} setUsername={props.setUsername} setPassword={props.setPassword} />
        </Route>
        <Route path="/register">
          <Register handlers={props.handlers} setUsername={props.setUsername} setPassword={props.setPassword} setPasswordConfirm={props.setPasswordConfirm} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
);

export default Views;
