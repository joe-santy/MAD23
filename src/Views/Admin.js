import React, { useState } from 'react';

const Admin = (props) => {

  return (
    <p>Admin</p>
  );

}

export default Admin;

/*
<div className="Admin row">

  <!-- Include Quill and Highlight.js stylesheet -->
  <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
  <link rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css">

  <!-- Create the toolbar container -->
  <div id="toolbar">
    <button class="ql-bold">Bold</button>
    <button class="ql-italic">Italic</button>
  </div>

  <!-- Create the editor container -->
  <div id="editor" className="blogPostCreator col-12">
    <p>Add blog post here.</p>
  </div>
</div>

<!-- Include Quill and Highlight.js -->
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>

<!-- Initialize Quill editor -->
<script>
  hljs.configure({   // optionally configure hljs
    languages: ['javascript', 'ruby', 'python']
  });

  var quill = new Quill('#editor', {
    modules: {
      syntax: true,              // Include syntax module
      toolbar: [['code-block']]  // Include button in toolbar
    },
    theme: 'snow'
  });
</script>
*/
