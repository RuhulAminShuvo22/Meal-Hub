import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            {
                cart.map(data => <h>{data.strMeal}</h>)
            }
        </div>
    );
};

export default Cart;