import React, { useState } from 'react'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'
import filterRender from '../utils/filterRender'
import { useLocation } from 'react-router-dom'
import 'animate.css'


const ProductPage = () => {

  //get request(state) from MainPage 
  const location = useLocation()
 
  const typeMainPage = location.state.type.type
  const purposeMainPage = location.state.purpose.purpose
  const zoneMainPage = location.state.zone.zone

  const [purposeRender, setPurposeRender] = useState(purposeMainPage)
  const [typeRender, setTypeRender] = useState(typeMainPage)
  const [zoneRender, setZoneRender] = useState(zoneMainPage)

  //get request from productHead
  const dataToRender = (purposeSelected, typeSelected, zoneSelected) => {
    setPurposeRender(purposeSelected)
    setTypeRender(typeSelected)
    setZoneRender(zoneSelected)
  }

  return (
    <>
      <Navbar fullNav={false}/>
      <ProductHead dataToRender={dataToRender}/>
      <div className="animate__animated animate__fadeIn animate__slow" key={filterRender(purposeRender, typeRender, zoneRender)}>
        {filterRender(purposeRender, typeRender, zoneRender)}
      </div>   
    </>
  )
}

export default ProductPage