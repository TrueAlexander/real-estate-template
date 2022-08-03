import React from 'react'
import PropertyItem from '../propertyItem/PropertyItem'
import './Featured.css'



const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Propriedades em destaque</h1>
            <p className='featured-text'>Conhece as novas imóveis</p>
            <PropertyItem />
        </div>
    )
}

export default Featured
