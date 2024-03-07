import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './components/AppLayout'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import { CartContextProvider } from './Context/CartContext'
import Products from './pages/Products'
import SingleCoffee from './pages/SingleCoffee'

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='coffees' element={<Products />} />
          <Route path='coffee/:id' element={<SingleCoffee />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
