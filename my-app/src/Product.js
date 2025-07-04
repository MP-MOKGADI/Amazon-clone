import React from 'react'
import './Product.css';

function Product({ id, title, price, image, rating }) {
    return (
        <div className='product'>
            <img 
                src={image}
                className='product__image'
                alt="" 
            />
            <div className='product__info'>
                <p>{title}</p>
                
                <div className='product__rating'>
                    <p>{rating}</p>
                </div>
                 <p className='product__price'>{price}</p>
            </div>
            
            <button className='product_button'>Add to Basket</button>
        </div>
    );
}

export default Product;
