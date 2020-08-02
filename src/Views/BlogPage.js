import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const BlogPage = (props) => {

  let { id } = useParams();

  if (!props.blogPosts) {
    // Loads as array [url,title, author, date, content]
    props.handlers.loadBlog();
  }

  return (
    <div className="BlogPage container">
      <h1>Aboard With A Bag</h1>
      {props.blogPosts &&
        props.blogPosts.map((post) => {
          console.log(id);
          if (post[0] === id){
            return (
              <div className="row">
                <h3 className="col-12 blogPostTitle"><Link to={post[0]}>{post[1]}</Link></h3>
                <h6 className="col-12">{post[2]}</h6>
                <h6 className="col-12">{post[3]}</h6>
                <div className="col-12">{post[4]}</div>
              </div>
            );
          }
      })}
    </div>
  );
}

export default BlogPage;
