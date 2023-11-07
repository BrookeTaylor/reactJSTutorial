/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: ModeToggler.js Component
 */



function ModeToggler() {

    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>


    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log("Dark mode is on")
        } else {
            console.log("Light mode is on")
        }
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )    
}

export default ModeToggler;

