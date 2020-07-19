import React, { useState } from 'react';

const Auth = (props) => {

  return (

        <form className="input-group">

          <input
            className="form-control"
            name="username"
            type="text"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)} />

          <input
            className="form-control"
            name="password"
            type="password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)} />

          <button
            id="login"
            className="btn"
            to="/"
            onClick={props.handlers.login}>Login</button>

        </form>

  );
}

export default Auth;
