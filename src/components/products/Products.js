import React from 'react'
import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'
import {Link} from 'react-router-dom'
import ProductPage from '../../pages/ProductPage'

import './Products.css'

const Products = () => {
    return (
        <div className='products'>
            <h1>Nossos imóveis</h1>
            <div>
                <p><span className='bold'>Todos</span></p>
                <p>Venda</p>
                <p>Aluguel</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <Link 
                className='btn'
                to='/imoveis'
            >
                Mostrar
            </Link>
        </div>
    )
}

export default Products
