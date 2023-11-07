/**
 *  Title: React JS Tutorial - Basic to Advance (2023)  
 *  Author: Nerd's lession  
 *  Modified By: Brooke Taylor  
 *  Date: 11/06/2023
 *  Description: MealsProvider.js Component
 */

import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = [ "Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes" ];

const MealsProvider = ({children}) => {
    
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} > 
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider