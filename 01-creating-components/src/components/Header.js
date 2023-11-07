/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/05/2023
 *  Description: App.js Component
 */

function Header(props) {

    console.log(props) 

    return <h1>Hello World! Hello, {props.name}, {props.color}.</h1>
  }

export default Header;