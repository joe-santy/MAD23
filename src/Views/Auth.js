import React, { useState } from 'react';

const Auth = (props) => {

  return (
    <form className="input-group">
      <div className="auth-form container">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              name="username"
              type="text"
              value={props.username}
              onChange={e => props.setUsername(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              name="password"
              type="password"
              value={props.password}
              onChange={e => props.setPassword(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <button
              id="login"
              className="btn"
              to="/"
              onClick={props.handlers.login}>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Auth;
