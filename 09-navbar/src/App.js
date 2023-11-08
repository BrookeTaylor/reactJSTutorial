/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/07/2023
 *  Description: App.js Component
 */

import './App.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="App">
        <Link to="/" className="nav-item">Homepage</Link>

        <Link to="about-me" className="nav-item">About Me</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

      
    </div>
  );
}

export default App;
