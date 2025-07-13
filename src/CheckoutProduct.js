import React,{useContext} from 'react'
import ShoppingContext from './context/shopping/ShoppingContext';
import "./CheckoutProduct.css"


function CheckoutProduct({id,title, price, image, rating,hideButton}) {
    const { removeFromBasket } = useContext(ShoppingContext);

    const removeFromBasketHandler =()=>{
        removeFromBasket({id:id})

    };
  return (
    <div className='checkout_product'>
        <img 
                src={image}
                className='checkout_product__image'
                alt="" 
        />
            <div className='checkout_product__info'>
                <p className='checkout_product_title'>{title}</p>
                
                <div className='checkout_product__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                    <p key={i}>⭐</p>))}
                </div>
                 <p className=' checkout_product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
{!hideButton && <button onClick={removeFromBasketHandler} className='checkout_product_button'>Remove From Basket</button>}            

            </div>
{/* {!hideButton && <button onClick={removeFromBasketHandler}>Remove From Basket</button>}             */}

    </div>
  )
}

export default CheckoutProduct
