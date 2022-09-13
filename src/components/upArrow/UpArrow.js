import UpArrowIcon from "../../assets/up-arrow.png"
import './UpArrow.css'
import 'animate.css'
import { Link as LinkRoll } from 'react-scroll'
import { useState, useEffect } from "react"


const UpArrow = () => {

  const [exist, setExist] = useState(true)
  const [y, setY] = useState(0)



  useEffect(() => {
    const handleScroll = event => {
      window.pageYOffset === 0 ? setY(0) : setY(1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {y > 0 && exist && <div 
        className="upArrow animate__delay-10s animate__animated animate__pulse animate__slow animate__infinite" 
        title="Voltar"
      >
        <LinkRoll
          className='scrollLink' 
          to={"navbar"} 
          activeClass="active" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
        >
          <img src={UpArrowIcon} alt="Voltar" />
        </LinkRoll>
      </div>}
    </>

  )
}

export default UpArrow