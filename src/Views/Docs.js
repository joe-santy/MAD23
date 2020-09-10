import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Docs = (props) => {

  if (!props.blogPosts) {
    // Loads as array [url,title, author, date, content]
    props.handlers.loadBlog();
  }

  return (
    <div className="Docs container">
      <h1>Documents</h1>
    </div>
  );
}

export default Docs;
