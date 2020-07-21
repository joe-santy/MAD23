import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar';
import Views from './Views';

const App = (props) => {

  // User is who's logged in; username is for login/register field.
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [appointments, setAppointments] = useState(null);

  const handlers = {
    alert : () => {
      alert('Alert.');
    },
    login : (event) => {
      // alert('Your username and password are: ' + '\n' + username + '\n' + password);
      event.preventDefault();
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username : username,
            password : password
          })
      };
      fetch('/api/users/', requestOptions)
          .then(response => response.json())
          .then(data => {
            // console.log(data.user);
            setUser(data.user);
            setUsername('');
            setPassword('');
          },
          err => {
            alert('Could not login.\nPlease try again.');
          });
    },
    logout : (event) => {
      setUser(null);
    },
    register : (event) => {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username : username,
          password : password
        })
      };
      if (password === passwordConfirm) {
        // alert('Your username and password are: ' + '\n' + username + '\n' + password);
        fetch('/api/users/register', requestOptions)
          .then(response => response.json())
          .then(data => {
            // console.log(data.user);
            if (!data.user) { alert('Issue registering.'); }
            setUser(data.user);
            setUsername('');
            setPassword('');
            setPasswordConfirm('');
          },
          err => {
            alert('Could not register.\nPlease try again.');
          });
      } else {
        alert('Passwords do not match.');
      }
    }
  }

  return (
    <div className="App">
      <Router>
        <NavBar handlers={handlers} user={user} />
        <Views handlers={handlers} setUsername={setUsername} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} />
      </Router>
    </div>
  )
}

export default App;
