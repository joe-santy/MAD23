// https://github.com/nhn/toast-ui.react-image-editor
// To Do:



import React, { useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
  // Theme object to extends default dark theme.
};

const TuiImageEditor = (props) => (
  <div className="row d-none d-lg-block">
    <div className="image-editor col-12">
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
    </div>
  </div>
);


export default TuiImageEditor;


/*
https://github.com/nhn/tui.image-editor/blob/v3.9.0/src/js/imageEditor.js

        this._handlers = {
            keydown: this._onKeyDown.bind(this),
            mousedown: this._onMouseDown.bind(this),
            objectActivated: this._onObjectActivated.bind(this),
            objectMoved: this._onObjectMoved.bind(this),
            objectScaled: this._onObjectScaled.bind(this),
            objectRotated: this._onObjectRotated.bind(this),
            createdPath: this._onCreatedPath,
            addText: this._onAddText.bind(this),
            addObject: this._onAddObject.bind(this),
            addObjectAfter: this._onAddObjectAfter.bind(this),
            textEditing: this._onTextEditing.bind(this),
            textChanged: this._onTextChanged.bind(this),
            iconCreateResize: this._onIconCreateResize.bind(this),
            iconCreateEnd: this._onIconCreateEnd.bind(this),
            selectionCleared: this._selectionCleared.bind(this),
            selectionCreated: this._selectionCreated.bind(this)
        };

        EXAMPLE:
            imageEditor.on('objectMoved', function(props) {
                console.log(props);
                console.log(props.type);
            });


*/
