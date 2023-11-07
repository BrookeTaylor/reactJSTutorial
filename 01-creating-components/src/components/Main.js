/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/05/2023
 *  Description: App.js Component
 */

function Main(props) {

    const mainStyle = {
      background: "lightgoldenrodyellow",
      width: "calc(70% - 10px)",
    }
  
      return (
        <main style={mainStyle}>
          Main Component: {props.greet}
        </main>
      )
    }
  
  export default Main;
  