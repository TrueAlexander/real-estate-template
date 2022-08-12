import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import dataProp from './../../dataProp.json'

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

    const fillProducts = () => {
        
        const showProp = dataProp.slice(0, 3)
        
        return showProp.map((item) => {
        return <img 
                    src={item.photo_main} 
                    alt='' 
                    key={item.id}/>
        }) 
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
                    Aluguel</p>
                <p 
                    className={clickedTemp ? "bold" : ""}
                    onClick={clickHandler} 
                >
                    Temporada</p>
            </div>
            <div className='container'>
                {fillProducts()}
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
