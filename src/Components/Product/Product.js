import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Product.css"

const Product = (props) => {
    // const{handleClick}=  props
    // console.log(props.product);
    const{product,handleClick}=props;
    const {name,img,seller,price,ratings} = props.product;
    // console.log(props);
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleClick(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;