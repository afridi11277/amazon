import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const [products,setproducts]= useState([])
    const[cart,setCart ]=useState([])
  
    useEffect(()=>{
        console.log('product loads before fetch',products);
        fetch("products.json")
        .then(res=>res.json())
            .then(data => {
                setproducts(data)
        console.log('products loaded')
    })
    },[])

    useEffect(()=>{
        console.log('local storage 1st line',products);
            const storedCart = getStoredCart()
            const savedCart=[]
                console.log(storedCart);
                for (const id in storedCart){
                    // console.log(id)
                    const addedProduct = products.find(product=>product.id===id)
                    if(addedProduct){
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)

                        console.log(addedProduct);
                    }
                }
                setCart(savedCart)
                console.log("local storage finished");
    },[products])

    const handleClick = (product) => {
        // console.log(product);
        // cart.push(product ) deya jabe na (push)
        const newCart = [...cart,product]
        setCart(newCart )
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            {/* <h1>shop from here</h1> */}
            <div className="products-container">

                {
                    products.map(product=><Product key={product.id}
                    product={product}
                    handleClick={handleClick}
                    >
                    
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;