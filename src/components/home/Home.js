import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='content'>
                <h1>Busque seu lugar na Cidade Maravilhosa</h1>
                <p className='search-text'> Transformando Sonhos em Realidade </p>
                <form className='search'>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Comprar</label>
                        <input type='radio'  />
                        <label>Alugar</label>
                        <input type='radio'  />
                        <label>Temporada</label>
                    </div>
                    <div>
                        <select name="product" id="">
                            <option value="">Procuro..</option>
                            <option value="all">Todos</option>
                            <option value="apartment">Apartamento</option>
                            <option value="house">Casa</option>
                            <option value="room">Kitnet</option>
                        </select>
                    </div>
                    <div>
                        <select name="zone" id="">
                            <option value="">No bairro..</option>
                            <option value="all">Todos</option>
                            <option value="lapa">Lapa</option>
                            <option value="maracana">Maracanã</option>
                            <option value="botafogo">Botafogo</option>
                            <option value="flamengo">Flamengo</option>
                            <option value="santa-teresa">Santa Teresa</option>
                        </select>
                    </div>
                    <Link to='/imoveis' className='btn'><AiOutlineSearch className='icon'/></Link>
                </form>
            </div>
        </div>
    )
}

export default Home
