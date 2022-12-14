import React from 'react'
import Featured from './../components/featured/Featured'
import Products from '../components/products/Products'
import Home from './../components/home/Home'
import About from '../components/about/About'
import Opinions from '../components/opinions/Opinions'
import Navbar from '../components/navbar/Navbar'


const MainPage = () => {
  return (
    <>
      <Navbar fullNav={true} />
      <Home />
      <Products />
      <Featured />
      <About />
      <Opinions />
    </>
  )
}

export default MainPage