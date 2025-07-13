import { useContext,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {loadStripe} from "@stripe/stripe-js";
import{Elements} from "@stripe/react-stripe-js"
import './App.css';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import NotFound from './NotFound'
import shoppingContext from './context/shopping/ShoppingContext';
import {auth} from "./Firebase"
import Checkout from './Checkout';
import Payment from './Payment';

const promise = loadStripe("pk_test_51RiZ3B2YIonQpdRIYE3X2djL7JEvDz0gLGVtWZkJPf1t92GIWZS8FZF3aweQZiN6gl8RGdU0vaJyotmYS98coPA200qP0N64mj");



const App = ()=> {
  const { setUser } = useContext(shoppingContext);

  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
      console.log("User is ->", authUser); 


      if(authUser){
        setUser( authUser)
      } else {
        setUser(null)
      }
    })
  }, [])
  

  return (
    <>
      <Header  />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/login">
          <Login   />
        </Route>
        <Route path="/checkout">
          < Checkout  />
        </Route>
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
      
      
    </>
  );
}

export default App;