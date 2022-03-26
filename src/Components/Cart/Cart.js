import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props

    // console.log(cart);
    let myProductName = [];
    // myProductName.push()
    // let total = 0;
    // let shipping = 0;
    // let quantity = 0;
    for (const product of cart) {
        myProductName = product.name
        // myProductName.push(product.name)
        // quantity = quantity + product.quantity
        // total = total + product.price * product.quantity
        // shipping = shipping + product.shipping
    }

    // const tax = parseFloat((total * 0.1).toFixed(2))
    // const grandTotal = total + shipping + tax


    return (
        <div className='cart'>

            <h3>orders summary</h3>
            
            <h3>selected Item: {<li>{myProductName}</li>}</h3>

            <button className='btn-cart'>choose one</button>
            <button className='btn-cart'>Reset</button>
            
            
            {/* <p>selected item: {quantity}</p> */}
            {/* <p>selected item: {quantity}</p> */}
            
            {/* <p>Total Price: ${total} </p> */}
            {/* <p>Total Shipping: ${shipping}</p> */}
            {/* <p>Tax: ${tax}</p> */}
            {/* <h5>Grand Total: ${grandTotal.toFixed(2)} </h5> */}
        </div>
    );
};

export default Cart;