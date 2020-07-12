// https://github.com/nhn/tui.editor/tree/master/apps/react-editor
// To Do:



import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import './TuiEditor.css';

const TuiEditor = () => (
   <Editor
    initialValue="A Board With A Bag Consulting provides digital solutions to international businesses through open-source technology."
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
);


export default TuiEditor;
