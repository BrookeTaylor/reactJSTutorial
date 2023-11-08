/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/07/2023
 *  Description: App.js Component
 */

import otto from './assets/images/otto.png';

function App() {

  const randomImageUrl = "https://picsum.photos/400/265";

  return (
    <div className="App">
      <h1>
        Task: add three images w/ some styling
      </h1>

      {/* First way */}
      <img 
        height={200}
        src={otto}
        alt="Otto dog"
      />

      {/* Second way */}
      <img 
        height={200}
        src={require('./assets/images/luna.png')}
        alt="Luna girl"
      />


      {/* Second way */}
      <img 
        height={200}
        src={require('./assets/images/ollie.png')}
        alt="Ollie dog"
      />


      {/* Third way */}
      <img 
        src={randomImageUrl}
        height={200}
        alt="random"
      />

    </div>
  );
}

export default App;


/** https://www.youtube.com/watch?v=cd3P3yXyx30&t=8194s @ 2:27:09 */