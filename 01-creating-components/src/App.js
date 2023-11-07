/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/05/2023
 *  Description: App.js Component
 */

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <div className="App">
      <Header name="Anna" color="purple" />

      <div>
        <Main greet="Howdy" />
        <Sidebar greet="Hi" />
      </div>
    </div>
  );

}

export default App;
