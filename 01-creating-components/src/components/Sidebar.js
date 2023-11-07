/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/05/2023
 *  Description: App.js Component
 */

function Sidebar(props) {

    const asideStyle = {
      background: "azure",
      width: "calc(30% - 10px)",
      marginLeft: "10px",
    }
  
  
  
      return ( 
        <aside 
          style={asideStyle}
          className="sidebar-component">
          <h2>Sidebar Component: {props.greet}</h2>
        </aside>
      );
    }
  
  export default Sidebar;