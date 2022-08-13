import React from 'react'
import PropertyItem from '../components/propertyItem/PropertyItem'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'
import dataProp from '../dataProp.json'
import filter from '../utils/filter'
import { useLocation } from 'react-router-dom'


const ProductPage = () => {

  //get request(state) from MainPage 
  const location = useLocation()
 
  const typeMainPage = location.state.type.type
  const purposeMainPage = location.state.purpose.purpose
  const zoneMainPage = location.state.zone.zone
  const arrMainPage = filter(purposeMainPage, typeMainPage, zoneMainPage)
  console.log(arrMainPage)



  //get request from productHead



  const properties = (arr) => {
    
    return arr.map((item => {
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
      {properties(arrMainPage)}
    </>
  )
}

export default ProductPage