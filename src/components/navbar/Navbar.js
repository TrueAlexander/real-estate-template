import React, {useState, useEffect} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import 'animate.css'

import './Navbar.css'

const Navbar = ({fullNav}) => {

    const purpose = "Venda"
    const type = "Todos"
    const zone = "Todos"

    const [burger, setBurger] = useState(false)
    
    const burgerClick = () => {
        setBurger(!burger)   
    }

    useEffect(() => {
        burger && window.innerWidth < 940 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' 
      }, [burger])

    const fillNav = () => {
        const ancors = [{title:"Sobre nós", anchor:"about"}, {title:"Opiniões", anchor:"opinions"}]
         return ( fullNav ? ancors.map((item, index) => {
            return (
                <li className="bold" key={index}><LinkRoll
                                            onClick={burgerClick} 
                                            className='scrollLink' 
                                            to={item.anchor} 
                                            activeClass="active" 
                                            spy={true} 
                                            smooth={true} 
                                            offset={-100} 
                                            duration={500} 
                                        >{item.title}
                                    </LinkRoll>
                            </li> 
                    )}) : " "
                ) 
    }

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
                    <li className="bold">
                        <Link 
                            to='/'
                            onClick={burgerClick}
                            >Home
                        </Link>
                    </li>
                    <li className="bold"       
                        ><Link 
                            to='/imoveis'
                            state={{
                                purpose: {purpose},
                                type: {type},
                                zone: {zone},
                              }}
                            onClick={burgerClick}
                            >Imóveis
                        </Link>
                    </li>
                    {fillNav()}
                    <li className="bold"><LinkRoll 
                            onClick={burgerClick}
                            className='scrollLink' 
                            to='contacts' 
                            activeClass="active" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500}
                        >Contatos</LinkRoll>
                    </li>
                </ul>
                <div className='hamburger' onClick={burgerClick}>
                    {burger ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
