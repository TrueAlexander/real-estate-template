import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useState } from 'react'

import './Home.css'

const Home = () => {

    const [purpose, setPurpose] = useState("Venda")
    const [type, setType] = useState("Todos")
    const [zone, setZone] = useState("Todos")

    const selectTypeChange = (e) => setType(e.target.value)
    const selectZoneChange = (e) => setZone(e.target.value)

    return (
        <div className='home'>
            <div className='content'>
                <h1>Busque seu lugar na Cidade Maravilhosa</h1>
                <p className='search-text'> Transformando Sonhos em Realidade </p>
                <form className='search'>
                    <div className='radio'> 
                        <input 
                            type='radio'
                            checked={purpose === "Venda"}
                            onChange={() => setPurpose("Venda")} 
                        />
                        <label>Venda</label>
                        <input 
                            type='radio'
                            checked={purpose === "Aluguel"}
                            onChange={() => setPurpose("Aluguel")}
                            />
                        <label>Aluguel</label>
                        <input
                            type='radio'
                            checked={purpose === "Temporada"}
                            onChange={() => setPurpose("Temporada")}
                        />
                        <label>Temporada</label>
                    </div>
                    <div>
                        <select 
                            name="product" 
                            onChange={selectTypeChange}
                        >
                            <option value="Todos">Procuro..</option>
                            <option value="Todos">Todos</option>
                            <option value="Apartamento">Apartamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Kitnet">Kitnet</option>
                        </select>
                    </div>
                    <div>
                        <select 
                            name="zone"
                            onChange={selectZoneChange} 
                        >
                            <option value="Todos">No bairro..</option>
                            <option value="Todos">Todos</option>
                            <option value="Lapa">Lapa</option>
                            <option value="Maracanã">Maracanã</option>
                            <option value="Botafogo">Botafogo</option>
                            <option value="Flamengo">Flamengo</option>
                            <option value="Santa Teresa">Santa Teresa</option>
                        </select>
                    </div>
                    <Link 
                        to='/imoveis' 
                        className='btn'
                        state={{
                            purpose: {purpose},
                            type: {type},
                            zone: {zone},
                          }}
                    >
                        <AiOutlineSearch className='icon'/>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Home
