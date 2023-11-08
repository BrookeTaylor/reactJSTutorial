/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/07/2023
 *  Description: App.js Component
 */

function App() {



  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = ` Happy ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, start planning the weekend`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `Woo - hoo, the weekend is coming!`;
  } else {
    dayMessage = 'Enjoy the weekend!';
  }





  return (
    <div className="App">
              <h1>
          {dayMessage}
        </h1>
        {morning ? <h2>Have you had breakfast yet?</h2> : ''}
    </div>
  );
}

export default App;




/**  https://www.youtube.com/watch?v=cd3P3yXyx30&t=7628s @ 2:16   */


