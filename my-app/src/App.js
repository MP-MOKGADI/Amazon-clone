import { useContext,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import NotFound from './NotFound'
import shoppingContext from './context/shopping/ShoppingContext';
import {auth} from "./Firebase"
import Checkout from './Checkout';



const App = ()=> {
  const { setUser } = useContext(shoppingContext);

  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
      console.log("User is ->".authUser);

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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
      
      
    </>
  );
}

export default App;