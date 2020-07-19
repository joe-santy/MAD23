import React, { useState } from 'react';

const Register = (props) => {

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

            <input
              className="form-control"
              name="passVerify"
              type="password"
              value={props.passwordConfirm}
              onChange={e => props.setPasswordConfirm(e.target.value)} />

            <button
              id="register"
              className="btn"
              to="/"
              onClick={props.handlers.register}>Register</button>

          </form>

    );

}

export default Register;
