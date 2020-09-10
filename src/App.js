import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar';
import Views from './Views';

const App = (props) => {

  // User is who's logged in; username is for login/register field.
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState('EN');
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [blogPost, setBlogPost] = useState(null);
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogPosts, setBlogPosts] = useState(null);

  const handlers = {
    alert : () => {
      alert('Alert.');
    },
    login : (event) => {
      // alert('Your username and password are: ' + username + '\n' + password);
      event.preventDefault();
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username : username,
            password : password
          })
      };
      fetch('/api/users', requestOptions)
          .then(response => response.json())
          .then(data => {
            // console.log(data.user);
            setUser(data.user);
            setUsername('');
            setPassword('');
          })
          .catch(function() {
            console.log("error");
          });
    },
    loadBlog : () => {
      const requestOptions = {
        method: 'GET'
      };

      fetch('/api/blog', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setBlogPosts(data);
        })
        .catch(function(err) {
          console.log("Error retrieving blog");
          console.log(err);
        });
    },
    logout : (event) => {
      setUser(null);
    },
    postBlog : (event) => {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title : blogTitle,
          author : user,
          content : blogPost
        })
      };
      if (user) {
        fetch('/api/blog', requestOptions)
          .then(() => {
            setBlogPost('');
            setBlogTitle('');
            window.location.href = '/';
          })
          .catch(function() {
            console.log("Error posting blog.");
          });
      } else {
        alert('Please log in.');
      }
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
          })
          .catch(function() {
            console.log("Error registering");
          });
      } else {
        alert('Passwords do not match.');
      }
    }
  }

  return (
    <div className="App">
      <Router>
        <NavBar handlers={handlers} user={user} lang={lang} />
        <Views handlers={handlers} user={user} setBlogPost={setBlogPost} setBlogTitle={setBlogTitle} setUsername={setUsername} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} blogTitle={blogTitle} blogPost={blogPost} blogPosts={blogPosts} />
      </Router>
    </div>
  )
}

export default App;
