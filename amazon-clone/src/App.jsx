import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/product-details/:id" element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App
