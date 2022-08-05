import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><Link to="./"><span><BsFillHouseFill />Sasha</span> Imóveis</Link></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="bold"><Link to='/'>Home</Link></li>
                    <li className="bold"><Link to='/imoveis'>Imóveis</Link></li>
                    <li className="bold"><Link to='/'>Sobre nós</Link></li>
                    <li className="bold"><Link to='/'>Opiniões</Link></li>
                    <li className="bold"><Link to='/'>Contatos</Link></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
