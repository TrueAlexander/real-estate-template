import React, {useState, useEffect} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import 'animate.css'

import './Navbar.css'

const Navbar = ({fullNav}) => {

    const [burger, setBurger] = useState(false)
    
    const burgerClick = () => {
        setBurger(!burger)   
    }

    useEffect(() => {

        burger && window.innerWidth < 940 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '' 
      }, [burger])

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><Link to="./../"><span><BsFillHouseFill />Sasha</span> Imóveis</Link></h1>
                <ul 
                    className={burger && window.innerWidth < 940
                        ? 'nav-menu active animate__animated animate__fadeIn' 
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
                    {fullNav && <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><LinkRoll className='scrollLink' to='about' activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >Sobre nós</LinkRoll></li>}
                    {fullNav && <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><LinkRoll className='scrollLink' to='opinions' activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Opiniões</LinkRoll></li>}
                    <li 
                        className="bold"
                        onClick={() => setBurger(!burger)}
                    ><LinkRoll className='scrollLink' to='contacts' activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Contatos</LinkRoll></li>
                </ul>
                <div className='hamburger' onClick={burgerClick}>
                    {burger ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
