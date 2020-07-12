// https://github.com/nhn/toast-ui.react-image-editor
// To Do:



import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import './TuiImageEditor.css';

const myTheme = {
  // Theme object to extends default dark theme.
};

const TuiImageEditor = () => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path: 'aboardwithabag.png',
        name: 'A Board With A Bag'
      },
      theme: myTheme,
      menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
      initMenu: 'filter',
      uiSize: {
        width: '1000px',
        height: '700px'
      },
      menuBarPosition: 'left'
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70
    }}
    usageStatistics={false}
  />
);


export default TuiImageEditor;
