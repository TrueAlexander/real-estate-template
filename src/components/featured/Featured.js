import React from 'react'
import PropertyItem from '../propertyItem/PropertyItem'
import './Featured.css'
import dataProp from './../../dataProp.json'


const Featured = () => {

    const fillFeatured = () => {
        return dataProp.map(item => {

            return item.featured 
                ?  <PropertyItem 
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
                        code={item.code}  
                    /> 
                : ''
        })
    }

    return (
        <div className='featured'>
            <h1 className='featured-text'>Propriedades em destaque</h1>
            <p className='featured-text'>Conheça as novas imóveis</p>
            {fillFeatured()}
        </div>
    )
}

export default Featured
