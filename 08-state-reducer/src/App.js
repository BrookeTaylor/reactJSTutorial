/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: App.js Component
 */

import { useReducer } from 'react';


const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money -50};
  return new Error();
}

function App() {

  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">

      <h1>Wallet: {state.money}</h1>

      <div>
        <button onClick={() => dispatch({type: 'ride'})}>
          A new customer!
        </button>
        <button onClick={() => dispatch({type: 'fuel'})}>
          Refill the take!
        </button>
      </div>

    </div>
  );
}

export default App;



/** https://www.youtube.com/watch?v=cd3P3yXyx30 @ 1:51:03 on video. */