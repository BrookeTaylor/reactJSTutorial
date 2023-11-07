/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: Counter.js Component
 */

import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {

    const { meals } = useMealsListContext();
    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter