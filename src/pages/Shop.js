import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category';
import NewArrival from '../components/NewArrival';
import Products from '../components/Products';

function Shop() {
  return (
    <>
        <Header/>
        <div className="container">
      <div className='row'>
        <div className='col-3 sidebar  has-scrollbar'>
            <Category/>
        </div>
        <div className='col-9 product-minimal'>
            <div className='product-showcase'>
            <h2 class="title">New Arrivals</h2>
            <NewArrival/>
            </div>

            <div className='product-showcase'>
            <h2 class="title">Trending</h2>
            <NewArrival/>
            </div>

            <div className='product-showcase'>
            <h2 class="title">Top Rated</h2>
            <NewArrival/>
            </div>

            <div className='product-main product-box'>
            <h2 class="title">New Products</h2>
            <Products/>
            </div>
        </div>

      </div>
  </div>
    </>
)}

export default Shop;