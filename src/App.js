import React from 'react';
import './App.css';
import TuiCalendar from './TuiCalendar.js';
import TuiImageEditor from './TuiImageEditor.js';
import TuiEditor from './TuiEditor.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <header className="App-header col-12">
            <img src="aboardwithabag.png" alt="logo" />
            <p><b>A Board With A Bag Consulting</b></p>
            <p>Providing digital solutions to international businesses through open-source technology</p>
          </header>
          <div className="calendar col-10 offset-1">
            <TuiCalendar />
          </div>
          <div className="editor col-10 offset-1">
          <TuiEditor />
          </div>
          <div className="image-editor col-10 offset-1">
            <TuiImageEditor />
          </div>
          {
          // Insert different features offered for websites: Jitsi, toast-ui, maps, etc.
          // Schedule consultation & input info
          // Integrate PayPal
          }
        </div>
      </div>
    </div>
  );
}

export default App;
