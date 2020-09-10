import React, { useState } from 'react';

const Header = (props) => {
  return (
    <header className="App-header col-12">
      {/* <img src="logo.png" alt="logo" /> */}
      <h1>MA District 23</h1>
      <p><b>One day at a time</b></p>
    </header>);
};

const Home = (props) => {

  return (
    <div className="Home row">
      <Header />
    </div>
  );

};

export default Home;
