import React, { useState } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Auth from './Views/Auth.js';
import Admin from './Views/Admin.js';
import Register from './Views/Register.js';
import Home from './Views/Home.js';
import Blog from './Views/Blog.js';
import Docs from './Views/Docs.js';
import BlogPage from './Views/BlogPage.js';

const Views = (props) => (

    /* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
    <div className="main container">
      <Switch>
        <Route path="/admin">
          {props.user && <Admin handlers={props.handlers} blogTitle={props.blogTitle} blogPost={props.blogPost} setBlogPost={props.setBlogPost} setBlogTitle={props.setBlogTitle} />}
          {!props.user && <Redirect to="/" />}
        </Route>
        <Route path="/blog">
          <Blog handlers={props.handlers} blogPosts={props.blogPosts} />
        </Route>
        <Route path="/docs">
          <Docs handlers={props.handlers} />
        </Route>
        <Route path="/auth">
          {props.user && <Redirect to="/" />}
          {!props.user && <Auth handlers={props.handlers} setUsername={props.setUsername} setPassword={props.setPassword} />}
        </Route>
        <Route path="/register">
          {props.user && <Redirect to="/" />}
          {!props.user && <Register handlers={props.handlers} setUsername={props.setUsername} setPassword={props.setPassword} setPasswordConfirm={props.setPasswordConfirm} />}
        </Route>
        <Route path="/:id" children={<BlogPage handlers={props.handlers} blogPosts={props.blogPosts} />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
);

export default Views;
