/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: Bnt.js Component
 */

/**
                      * TIP * 
    CTRL + C + K = comments out highlighted! 
 */



// function Btn() {

//     const clickHandler = () => console.log('clicked')

//     return(
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     )
// }

// export default Btn;

function Btn() {

    const clickHandler = () => console.log('mouse over')

    return(
        <button onMouseOver={clickHandler}>
            Click me
        </button>
    )
}

export default Btn;