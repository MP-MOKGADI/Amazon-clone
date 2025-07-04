import React from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';
import AuthContext from './context/AuthContext';


const Header = () => {
  const ctx = React.useContext(AuthContext);
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
        {ctx.isLoggedIn ? (
          <Link to='/'>
            <div className='header__option' onClick={ ctx.onLogout}>
              <span className='header__optionOne'>Hello User</span>
              <span className='header__optionTwo'>Sign Out</span>
            </div>
          </Link>
        ) : (
          <Link to='/login'>
            <div className='header__option'>
              <span className='header__optionOne'>Hello Guest</span>
              <span className='header__optionTwo'>Sign In</span>
            </div>
        </Link>)}
        <div className='header__option'>
          <span className='header__optionOne'>Returns</span>
          <span className='header__optionTwo'>& Orders</span>
        </div>
        <div className='header__optionBasket'>
          {/* <ShoppingBasketIcon /> */}
          <span className='header__optionTwo header_basketCount'>0</span>
          <span className='header__optionTwo'>Cart</span>
        </div>
      </div>
    </header>
    
    
  )
}

export default Header;


