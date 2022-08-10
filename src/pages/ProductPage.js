import React from 'react'
import PropertyItem from '../components/propertyItem/PropertyItem'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'

const ProductPage = () => {
  return (
    <>
      <Navbar fullNav={false}/>
      <ProductHead />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </>
  )
}

export default ProductPage