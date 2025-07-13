// import React,{useContext} from 'react'
// import {useHistory} from "react-router-dom"
// import CurrencyFormat from "react-currency-format"
// import shoppingContext from './context/shopping/ShoppingContext'
// import "./Subtotal.css"

// const Subtotal = () => {
//   const history =useHistory();
//     const { basket,getBasketTotal } = useContext(shoppingContext);
//     console.log(getBasketTotal(basket))
//   return (
//     <div className='subtotal'>
//      <CurrencyFormat
//       renderText={(value) => (
//         <>
//           <p>
//             Subtotal ({basket.length} items): <strong>{value}</strong>
//           </p>
//           <small className='subtotal_gift'>
//             <input type='checkbox'/>This order contains a gift
//             </small>
//         </>
//       )}
//       decimalScale={2}
//       value={getBasketTotal(basket)}
//       displayType={"text"}
//       prefix={"$"} 
//      />

//      <button onClick={() => history.push('/payment')}>
//         Proceed to Checkout
//      </button>
//     </div>
//   )
// }

// export default Subtotal
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import shoppingContext from './context/shopping/ShoppingContext'

const Subtotal = () => {
  const history =useHistory(); // if you're using React Router v6+
  const { basket, getBasketTotal } = useContext(shoppingContext);

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
