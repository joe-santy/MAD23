import React, { useState } from 'react';

const Register = (props) => {

  return (
    <form className="input-group">
      <div className="register-form container">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              placeholder="Username"
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
              placeholder="Password"
              name="password"
              type="password"
              value={props.password}
              onChange={e => props.setPassword(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <input
              className="form-control"
              placeholder="Confirm Password"
              name="passVerify"
              type="password"
              value={props.passwordConfirm}
              onChange={e => props.setPasswordConfirm(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <button
              id="register"
              className="btn"
              onClick={props.handlers.register}>Register</button>
          </div>
        </div>
      </div>
    </form>
  );

}

export default Register;
