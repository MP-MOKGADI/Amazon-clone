
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import NotFound from './NotFound';



const App = ()=> {
  

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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
      
      
    </>
  );
}

export default App;