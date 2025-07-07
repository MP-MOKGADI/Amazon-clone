import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import shoppingContext from './context/shopping/ShoppingContext';
import './Header.css';
import {  auth } from './Firebase';


//import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';\


const Header = () => {
  //const ShoppingContext = useContext(ShoppingContext);
  const { basket,user } = useContext(shoppingContext);
  //const { basket } = ShoppingContext;

  const handleAuthentication = () =>{
    if (user){
      auth.signOut();

    }
  }

  return (
     <header className='header'>
      <Link to='/'>
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon logo ' className='header__logo' />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__input' />
        <div className='search__icon'> 
          <p>Go</p>
        </div>
        {/* <SearchIcon className='search_icon' /> */}
      </div>
      <div className='header_nav'>
        
          <Link to= {!user && "/login"}>
            <div className='header__option' onClick={ handleAuthentication}>
              <span className='header__optionOne'>
                Hello {!user ? "Guest" : user.email}</span>
              <span className='header__optionTwo'>
                {user ? "Sign Out" : "Sign In"}
                </span>
            </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionOne'>Returns</span>
          <span className='header__optionTwo'>& Orders</span>
        </div>
        <div className='header__optionBasket'>
          {/* <ShoppingBasketIcon /> */}
          <span className='header__optionTwo header_basketCount'>{basket?.length}</span>
          <span className='header__optionTwo'>Cart</span>
        </div>
      </div>
    </header>
    
    
  )
}

export default Header;


