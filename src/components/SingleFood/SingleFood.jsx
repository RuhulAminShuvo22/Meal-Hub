import React from 'react';
import "./SingleFood.css"

const SingleFood = ({food}) => {
    console.log(food)
    return (
        <div className='card'>
            <img src={food.strMealThumb} alt="" />
            <h1>{food.strMeal}</h1>
        </div>
    );
};

export default SingleFood;