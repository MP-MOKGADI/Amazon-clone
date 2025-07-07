import React, { useContext } from 'react';
import shoppingContext from './context/shopping/ShoppingContext';
import CheckoutProduct from './CheckoutProduct.js';

import "./Checkout.css";

import Subtotal from './Subtotal.js';

const Checkout = () => {
    const { basket,user } = useContext(shoppingContext);
return (
    <div className="checkout">
        <div className="checkout_left">
            <img
                className="checkout_ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB665833492_.jpg"
                alt="Checkout Ad"
            />
            <div>
                <h3>Hello, {user ? user.email : "Guest"}</h3>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='checkout_right'><Subtotal/></div>
    </div>
)
}

export default Checkout
