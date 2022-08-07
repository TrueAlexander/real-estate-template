import React, {useState, useEffect} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import 'animate.css'

import './Navbar.css'

const Navbar = () => {

    const [burger, setBurger] = useState(false)
    
    const burgerClick = () => {
        setBurger(!burger)
    }

    useEffect(() => {
        burger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
      }, [burger])

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><Link to="./"><span><BsFillHouseFill />Sasha</span> Imóveis</Link></h1>
                <ul 
                    className={burger 
                        ? 'nav-menu active animate__animated animate__fadeInRight' 
                        : 'nav-menu'
                    }
                >
                    <li 
                        className="bold" 
                        onClick={() => setBurger(!burger)}
                    ><Link to='/'>Home</Link>
                    </li>
                    <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><Link to='/imoveis'>Imóveis</Link></li>
                    <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><Link to='/'>Sobre nós</Link></li>
                    <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><Link to='/'>Opiniões</Link></li>
                    <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><Link to='/'>Contatos</Link></li>
                </ul>
                <div className='hamburger' onClick={burgerClick}>
                    {burger ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
