import React from 'react'
import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'
import {Link} from 'react-router-dom'
import { useState } from 'react'

import './Products.css'

const Products = () => {

    const [clickedAll, setClickedAll] = useState(true)
    const [clickedSale, setClickedSale] = useState(false)
    const [clickedRent, setClickedRent] = useState(false)
    const [clickedTemp, setClickedTemp] = useState(false)


    const clickHandler = (e) => {
        console.log(e.target)
        setClickedAll(false)
        setClickedSale(false)
        setClickedTemp(false)
        setClickedRent(false)
        e.target.classList.add("bold")

    }

    return (
        <div className='products'>
            <h1>Nossos imóveis</h1>
            <div>
                <p 
                    className={clickedAll ? "bold" : ""}
                    onClick={clickHandler} 
                >
                    Todos</p>
                <p 
                    className={clickedSale ? "bold" : ""}
                    onClick={clickHandler} 
                >
                    Venda</p>
                <p 
                    className={clickedRent ? "bold" : ""}
                    onClick={clickHandler} 
                >
                    Aluguél</p>
                <p 
                    className={clickedTemp ? "bold" : ""}
                    onClick={clickHandler} 
                >
                    Temporada</p>
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
