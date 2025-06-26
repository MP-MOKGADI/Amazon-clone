import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon logo 'className='header__logo'/>
      <div className='header__search'>
        <input type='text' className='header__input' />
        <div className='search__icon'> 
          <p>Go</p>
        </div>
        {/* <SearchIcon className='search_icon' /> */}
      </div>
      <div className='header_nav'>
        <div className='header__option'>
          <span className='header__optionOne'>Hello Guest</span>
          <span className='header__optionTwo'>Sign In</span>
        </div>
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


