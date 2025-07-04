import React from 'react'
import  './Home.css';
import Products from './Products';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img src="https://m.media-amazon.com/images/I/51-heiHFh-L._SX3000_.jpg"
            alt="Home Banner" className='home__image' />
            <Products />
        </div>
  
      </div>
  )
}

export default Home
