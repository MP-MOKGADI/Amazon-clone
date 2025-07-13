
import React ,{useContext} from 'react';
import './Product.css';
import ShoppingContext from './context/shopping/ShoppingContext';


function Product({ id,title, price, image, rating }) {
    //const ShoppingContext = useContext(ShoppingContext);
    const { addToBasket } = useContext(ShoppingContext);
    //const { addToBasket } = ShoppingContext;

    
    const addToBasketHandler = () =>{
        addToBasket({ id, title, price, image, rating });

    }
    return (
        <div className='product' key={id}>
            <img 
                src={image}
                className='product__image'
                alt="" 
            />
            <div className='product__info'>
                <p>{title}</p>
                
                <div className='product__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                    <p key={i}>⭐</p>))}
                </div>
                 <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
            </div>
            
            <button className='product_button' onClick ={addToBasketHandler}>Add to Basket</button>
        </div>
    );
}

export default Product;
