import './ProductHead.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const ProductHead = () => {

  const location = useLocation()
  const purpose = location.state.purpose.purpose
  const type = location.state.type.type
  const zone = location.state.zone.zone


  const [purposeSelected, setPurposeSelected] = useState(purpose)
  const [typeSelected, setTypeSelected] = useState(type)
  const [zoneSelected, setZoneSelected] = useState(zone)
  const changeZoneHandler = (e) => setZoneSelected(e.target.value)
  const changePurposeHandler = (e) => setPurposeSelected(e.target.innerText)
  const changeTypeHandler = (e) => setTypeSelected(e.target.innerText)

  // const fillTypes = () => {

  //   const allProp = JSON.parse(localStorage.getItem("allProp")) 
    
  //   const arrProp = allProp.map((item) => {
  //     let res = []
  //     for (let i in item) res.push(item[i])
  //     return res
  //   })

  //   const arrTypes = (array) => {
  //     let arrRes =[]
  //     for (let j = 0; j < array.length; j++) arrRes.push(array[j][1])
  //     return arrRes
  //   }
  //   const arrAllTypes = arrTypes(arrProp)
  //   const uniqueTypes = arrAllTypes.filter((x, i, a) => a.indexOf(x) == i)
    
  //   const types = ["Todos", ...uniqueTypes]
   
  //   return types.map((item, index) => {
  //     return <div className='link-product' key={index}>
  //               <p>{item}</p>
  //             </div>
  //   })
  // }

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
        <h1>{typeSelected} <span><small>{purposeSelected === "Venda" ? "à " : "para "}</small>{purposeSelected}</span></h1>
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
          <button className='btn'><AiOutlineSearch className='icon'/></button>
        </div>
        
      </div>     
    </div>
  )
}

export default ProductHead