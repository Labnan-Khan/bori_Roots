import React from 'react'
import Home from './components/home/Home'
import Footera from './components/footer/Footera'
import Navbar from './components/navbar/Navbar'
import Discover from './components/discover/Discover'
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Card from './components/card/Card'
import Recipe from './components/recipe/Recipe'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          
          <Route  path='/' element={<Home />}/>
          <Route  path='discover' element={<Discover />}/>
          <Route  path='recipe' element={<Recipe />}/>
          <Route  path='/shop' element={<Shop />}/>
          <Route  path='/contact' element={<Contact />}/>
          <Route  path='/card' element={<Card />}/>
          
         
        </Routes>

         <Footera />
      </BrowserRouter>
     
    </>
  )
}

export default App