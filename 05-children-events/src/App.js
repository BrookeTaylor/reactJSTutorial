/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: App.js Component
 */

import Child from './Child';
import './App.css';

function App() {

  const date = new Date();


  return (

    <>
    <h1>Insert the Child component here:</h1>

    <Child message={date.toLocaleTimeString()} />
    </>
  );
}

export default App;

