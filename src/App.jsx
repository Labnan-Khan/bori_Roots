import React from 'react'
import Home from './components/home/Home'
import Footera from './components/footer/Footera'
import Navbar from './components/navbar/Navbar'
import Discover from './components/discover/Discover'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <Home /> */}
      <Discover />
      <Footera />
    </>
  )
}

export default App