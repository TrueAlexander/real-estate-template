import './ProductHead.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import {useState} from 'react'
import 'animate.css'

const ProductHead = ({dataToRender}) => {

  const location = useLocation()
  const purpose = location.state.purpose.purpose
  const type = location.state.type.type
  const zone = location.state.zone.zone

  const [animated, setAnimated] = useState(false)

  const [purposeSelected, setPurposeSelected] = useState(purpose)
  const [typeSelected, setTypeSelected] = useState(type)
  const [zoneSelected, setZoneSelected] = useState(zone)
  const changeZoneHandler = (e) => setZoneSelected(e.target.value)
  const changePurposeHandler = (e) => {  
    setPurposeSelected(e.target.innerText)
    setAnimated(true)
  }
  const changeTypeHandler = (e) => {
    setTypeSelected(e.target.innerText)
    setAnimated(true)
  }

  const clickHandler = () => {
    dataToRender(purposeSelected, typeSelected, zoneSelected)
  }

  return (
    <div className="productHead">
      <div className="container">
        <div className="toggle-product">
          <p 
            className={typeSelected === "Todos" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Todos
          </p>
          <p 
            className={typeSelected === "Apartamento" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Apartamento
          </p>
          <p 
            className={typeSelected === "Casa" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Casa
          </p>
          <p 
            className={typeSelected === "Kitnet" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Kitnet
          </p>
        </div>
        <div className="toggle-product">
          <p 
            className={purposeSelected === "Todos" ? 'link-product blue active' : 'link-product blue'}
            onClick={changePurposeHandler}
          >
            Todos
          </p>
          <p 
            className={purposeSelected === "Venda" ? 'link-product blue active' : 'link-product blue'}
            onClick={changePurposeHandler}
          >
            Venda
          </p>
          <p 
            className={purposeSelected === "Aluguel" ? 'link-product blue active' : 'link-product blue'}
            onClick={changePurposeHandler}
          >
            Aluguel
          </p>
          <p 
            className={purposeSelected === "Temporada" ? 'link-product blue active' : 'link-product blue'}
            onClick={changePurposeHandler}
          >
            Temporada
          </p>
        </div>
        <h1 
          className={animated ? "animate__animated animate__fadeIn animate__slow" : ""} 
          key={[typeSelected, purposeSelected]} 
        >{typeSelected} <span><small className=''>{purposeSelected === "Venda" ? "à " : "para "}</small>{purposeSelected}</span>
        </h1>
        <div className="productHead-row">
          <h3>Escolha o bairro:</h3>
          <select 
            name="zone"
            defaultValue={zoneSelected}
            onChange={changeZoneHandler}
            >
              <option value="Todos">Todos</option>
              <option value="Botafogo">Botafogo</option>
              <option value="Lapa">Lapa</option>
              <option value="Flamengo">Flamengo</option>
              <option value="Santa Teresa">Santa Teresa</option>
              <option value="Maracanã">Maracanã</option>
          </select>
          <button 
            className='btn'
            onClick={clickHandler}
          >
            <AiOutlineSearch className='icon'/></button>
        </div>
        
      </div>     
    </div>
  )
}

export default ProductHead