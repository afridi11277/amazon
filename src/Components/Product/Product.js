import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Product.css"

const Product = (props) => {
    // const{handleClick}=  props
    // console.log(props.product);
    const{product,handleClick}=props;
    const {name,images,price} = props.product;
    // console.log(props.product);
    
    
    return (
        
        <div className='product'>
            
            <img src={images} alt=""></img>
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
                
            </div>
            <br />
            <button onClick={()=>handleClick(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;