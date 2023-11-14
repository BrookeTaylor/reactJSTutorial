/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/08/2023
 *  Description: App.js Component
 */


// Import the React Player
import ReactPlayer from 'react-player';
import './App.css';

function App() {

  const vidUrl = 'https://www.facebook.com/facebook/videos/10153231379946729/';
  
  return (
    <div className="App">
      <h1>React Player example</h1>

      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
      />

    </div>
  );
}


export default App;
