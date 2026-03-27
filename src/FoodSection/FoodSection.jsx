import React, { use, useState } from 'react';
import SingleFood from '../components/SingleFood/SingleFood';
import Cart from '../components/Cart/Cart';

const FoodSection = ({foodDataRes}) => {

    
    const data = use(foodDataRes);
    const foods = data.meals
    
    const [cart, setCart] = useState([])

    const addToCart = (foodData) => {
        setCart([...cart,foodData])
    }

    const handleOrder =()=> {
        setCart([])
        alert("order complete !!")
    }
    


    return (
        <div className='food-container-parent'>

            <div style={{width:"75%"}} className='food-container'>
            {
                foods.map(food=> <SingleFood addToCart={addToCart} food= {food}></SingleFood>)
            }
        </div>
        {/* .................................................................... */}
        
        
        <div style={{backgroundColor:"cyan", width:"75%"}}>
            <h1>card</h1>
            <Cart cart={cart}> </Cart>

            <button onClick={handleOrder}  className='btn-card'>Order now</button>

        </div>
        {/* ............................ */}


        </div>
    );
};

export default FoodSection;