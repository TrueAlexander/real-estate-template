import React from 'react'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import WhatsappIcon from './components/whatsappIcon/WhatsappIcon'
import ScrollToTop from './utils/ScrollToTop'
import UpArrow from './components/upArrow/UpArrow'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/imoveis' element={<ProductPage/>}/>
        </Routes>
      <WhatsappIcon/>
      <UpArrow />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
