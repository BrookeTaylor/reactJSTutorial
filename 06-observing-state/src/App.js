/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: App.js Component
 */

import './App.css';
import React, { useState } from 'react';
import Heading from './Heading';


function App() {

  const [word, setWord] = React.useState('Eat')

  function handleClick() {
    setWord('Drink')
  }


  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} />

      <button onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}

export default App;
