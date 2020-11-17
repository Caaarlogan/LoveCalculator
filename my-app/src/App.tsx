import React, { useState } from 'react';
import './App.css';
import CrushEnter from './Components/CrushEnterComponent/CrushEnter';
import Header from './Components/Header/Header'
import { IUserInput } from './Common/Interfaces';

function App() {
  // eslint-disable-next-line
  const [UserInput, setUserInput] = useState<IUserInput>({
    UserName: "",
    CrushName: "",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div>
      <Header/>
      <CrushEnter SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default App;
