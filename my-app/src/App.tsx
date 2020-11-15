import React from 'react';
import './App.css';
import { TextField } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <h1>Love Calculator</h1>
      <h2>Enter Your Name</h2>
      <TextField
        required
        id="user-name"
        label="Enter Your Name"
        type="text"
      />
      <h2>Enter Your Crush's Name</h2>
      <TextField
        required
        id="crush-name"
        label="Enter Your Crush's Name"
        type="text"
      />
    </div>
  );
}

export default App;
