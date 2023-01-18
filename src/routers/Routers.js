import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import Account from '../pages/Account'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Location from '../pages/Location'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<Products />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='products/:id' element={<ProductDetails />} />
      <Route path='account' element={<Account />} />
      <Route path='contact' element={<Contact />} />
      <Route path='location' element={<Location />} />
    </Routes>
  )
}

export default Routers