// https://github.com/nhn/tui.editor/tree/master/apps/react-editor
// To Do:



import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const TuiEditor = () => (

  <div className="row">
    <div className="editor col-12 col-md-4">
      <h2>Editor</h2>
      <p>Embed text, code, or audiovisual editors to create documents and marketing materials, design logos, edit video or pictures, and so on. These can be used for blogging, integrated with social media APIs for automated uploading, or saved to the system for other uses.</p>
    </div>
    <div className="editor col-12 col-md-8">

       <Editor
        initialValue="A Board With A Bag Consulting provides digital solutions to international businesses through open-source technology."
        previewStyle="vertical"
        height="60vh"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  </div>
);


export default TuiEditor;
