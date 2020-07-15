import React from 'react';

function Tech() {
  const stack = [
    {
      name : "Linux",
      href : "https://www.linuxfoundation.org/projects/linux/",
      description : "The open-source OS hosting most on the world's servers.",
      shortDesc : "Operating system"
    },
    {
      name : "Node.js",
      href : "https://nodejs.org/",
      description : "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      shortDesc : "Runtime environment"
    },
    {
      name : "Express",
      href : "https://expressjs,com/",
      description : "Fast, unopinionated, minimalist web framework for Node.js.",
      shortDesc : "Server"
    },
    {
      name : "MongoDB",
      href : "https://www.mongodb.com/",
      description : "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
      shortDesc : "Database"
    },
    {
      name : "React",
      href : "https://reactjs.org/",
      description : "A JavaScript library for building user interfaces.",
      shortDesc : "Component framework"
    },
    {
      name : "jQuery",
      href : "https://jquery.com/",
      description : "A fast, small, and feature-rich JavaScript library that makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler.",
      shortDesc : "Manipulation framework"
    },
    {
      name : "Bootstrap",
      href : "https://getbootstrap.com/",
      description : "Bootstrap is the world’s most popular front-end open source toolkit, speeding up development of responsive, mobile-first sites.",
      shortDesc : "Responsive design framework"
    }
  ];

  let stackList = [];

  for (let i in stack) {
    stackList.push(<div className="row" key={stack[i].name}><div  className="col-12 col-lg-6"><b><a href={stack[i].href}>{stack[i].name}</a></b></div><div className="col-12 col-lg-6"><p>{stack[i].shortDesc}</p></div></div>);
  };

  return (
    <div className="stack col-12 col-md-6">
      <h2>Tech Stack</h2>
      <p>I write clean code using a modern open-source tech stack that allows rapid development and deployment.  Rest assured that if you ever change developers, they will have access to everything needed to maintain your project, incuding great documentation.  The standard tools that I use include:</p>
      <div className="container">{stackList}</div>
    </div>
  );
}

function Options() {
  const features = {
    "Maps" : "leaflet",
    "Audio Manipulation" : "",
    "Video Manipulation" : "",
    "Online Store" : "",
    "Payments" : "PayPal",
    "Blog" : "",
    "Internationalization" : "",
    "ERP" : ""
  };

  let featureList = [];

  for (let i in features) {
    featureList.push(<div className="row" key={i}><div className="col-12 col-lg-6"><b><p>{i}</p></b></div><div className="col-12 col-lg-6"><p></p></div></div>);
  };

  return (
    <div className="options col-12 col-md-6">
      <h2>Options</h2>
      <p>The projects I develop are modular, allowing easy integration of any number of features.  The sky is the limit.  The open-source ecosystem provides all kinds of solutions that can be added to projects and modified as needed without any liscencing fees.  You business may require custom functionality for any number of purposes.  These are just a few of the features that could be included in your project:</p>
      <div className="container">{featureList}</div>
    </div>
  );
}

function TechStack() {

  return (
    <div className="tech-stack row">
      <Tech />
      <Options />
    </div>
  );
}

export default TechStack;
