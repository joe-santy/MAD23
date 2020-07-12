import React from 'react';
import './App.css';
import AbwabHeader from './AbwabHeader.js';
import TuiCalendar from './TuiCalendar.js';
import TuiImageEditor from './TuiImageEditor.js';
import TuiEditor from './TuiEditor.js';
import TechStack from './TechStack.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AbwabHeader />
        <TechStack />
        <TuiEditor />
        <TuiCalendar />
        <TuiImageEditor />
      </div>
    </div>
  );
}

export default App;
