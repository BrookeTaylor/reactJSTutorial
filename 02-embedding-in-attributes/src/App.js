/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/05/2023
 *  Description: App.js Component
 */

import './App.css';
import avatar from './avatar.png';



function Logo(props) {
  const userPic = <img src={avatar} alt="Avatar logo." />;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>

      <Logo />
    </div>
  );
}

export default App;

/** React JS Tutorial - Basic to Advance (2023 @ 58:31) */