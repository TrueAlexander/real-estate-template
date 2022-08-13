import React from 'react'
import PropertyItem from '../components/propertyItem/PropertyItem'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'
import dataProp from '../dataProp.json'
import filter from '../filter'
import { useLocation } from 'react-router-dom'


const ProductPage = () => {

  //add dataProp to localStorage
  localStorage.setItem("allProp", JSON.stringify(dataProp))

  //get request(state) from MainPage 
  const location = useLocation()
  // console.log(location.state)
  
  //get request from productHead


  // console.log(filter(dataProp));

  const properties = () => {
    
    return dataProp.map((item => {
      return <PropertyItem 
                key={item.id}
                address={item.address}
                zone={item.zone}
                price={item.price}
                type={item.type}
                rooms_num={item.rooms_num}
                bath_num={item.bath_num}
                area={item.area} 
                description={item.description}
                purpose={item.purpose}
                featured={item.featured}
                photo_main={item.photo_main}
                photos={item.photos}  
              />
    }))
  }
  return (
    <>
      <Navbar fullNav={false}/>
      <ProductHead />
      {properties()}
    </>
  )
}

export default ProductPage