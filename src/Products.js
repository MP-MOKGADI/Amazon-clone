import React from 'react'
import './Products.css';
import Product from './Product';

function Products() {
  return (
    <div>
      <div className='products_row'>
        
        <Product id="1"
        title="The Lean Startup"
        image="https://m.media-amazon.com/images/I/41kKHZrnKlL._AC_UY218_.jpg"
        rating={5}
        price={29.99}
        />
        { <Product id="2"
        title="The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change Paperback"
        price={19.99}
        image="https://m.media-amazon.com/images/I/61tpl0kISoL._AC_UL320_.jpg"
        rating={4}/> }
      </div>
      <div className='products_row'>
        <Product id="3"
        title="The Power of Now: A Guide to Spiritual Enlightenment"
        price={15.99}
        image="https://m.media-amazon.com/images/I/615Tm7T7c+L._AC_UL320_.jpg"
        rating={5}/>
        <Product id="4"
        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
        price={24.99}
        image="https://m.media-amazon.com/images/I/81F90H7hnML._AC_UL320_.jpg"
        rating={5}/>
        <Product id="5"
        title="Educated: A Memoir"
        price={18.99}
        image="https://m.media-amazon.com/images/I/811-HEjEWbL._AC_UL320_.jpg"
        rating={4}/>
        

      </div>
      <div className='products_row'>
        <Product id="6"
        title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
        price={16.99}
        image="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL320_.jpg"
        rating={5}/>
        <Product id="7"
        title="Becoming"
        price={22.99}
        image="https://m.media-amazon.com/images/I/819YLKVUOhL._AC_UL320_.jpg"
        rating={4}/>
     
      </div>

    </div>
  )
}

export default Products
