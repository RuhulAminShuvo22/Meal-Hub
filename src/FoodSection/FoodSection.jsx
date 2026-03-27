import React, { use } from 'react';
import SingleFood from '../components/SingleFood/SingleFood';

const FoodSection = ({foodDataRes}) => {

    
    const data = use(foodDataRes);
    const foods = data.meals
    console.log(foods)
    return (
        <div className='food-container'>
            {
                foods.map(food=> <SingleFood food= {food}></SingleFood>)
            }
        </div>
    );
};

export default FoodSection;