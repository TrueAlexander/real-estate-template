import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import WhatsappIcon from './components/whatsappIcon/WhatsappIcon'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/imoveis' element={<ProductPage/>}/>
        </Routes>
      <WhatsappIcon/>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
