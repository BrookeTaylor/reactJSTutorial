/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: App.js Component
 */


import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

    </div>
  );
}

export default App;
