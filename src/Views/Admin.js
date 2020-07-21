import React, { useState } from 'react';
import TuiCalendar from './Admin/TuiCalendar.js';
import TuiImageEditor from './Admin/TuiImageEditor.js';
import TuiEditor from './Admin/TuiEditor.js';

const Admin = (props) => {

  return (
    <div className="Admin">
      <TuiEditor />
      <TuiImageEditor />
      <TuiCalendar />
    </div>
  );
}

export default Admin;
