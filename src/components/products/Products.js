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

    const [showProp, setShowProp] = useState(dataProp.slice(0, 3))
    

    const clickHandler = (e) => {
        if (e.target.innerText !== "Todos") {
            setClickedAll(false)
        }
        if (e.target.innerText === "Venda") {
            setClickedSale(true)
            setClickedRent(false)
            setClickedTemp(false)
        } else if (e.target.innerText ==="Aluguel") {
            setClickedRent(true)
            setClickedSale(false)
            setClickedTemp(false)
        } else if (e.target.innerText === "Temporada") {
            setClickedTemp(true)
            setClickedRent(false)
            setClickedSale(false)
        } else {
            setClickedAll(true)
            setClickedRent(false)
            setClickedSale(false)
            setClickedTemp(false)
        }  

        //for filtered render
        let showChoosed
        if (e.target.innerText !== "Todos") {
           showChoosed = dataProp.filter((item) => (item.purpose === e.target.innerText))
        } else showChoosed = dataProp
        
        setShowProp(showChoosed.slice(0, 3))
         
    }

    const fillProducts = (arr) => {
          
        return arr.map((item) => {
        return <img 
                    src={item.photo_main} 
                    alt='propiedade' 
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
                {fillProducts(showProp)}
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
