import './ProductHead.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductHead = () => {
  return (
    <div className="productHead">
      <div className="container">
        <h1>{"Apartamento"} <span>{"à Venda"}</span></h1>
        <div className="productHead-row">
          <h3>Troque o bairro de busca:</h3>
          <select name="zone" id="">
              <option value="all">Todos</option>
              <option value="botafogo">Botafogo</option>
              <option value="lapa">Lapa</option>
              <option value="flamengo">Flamengo</option>
              <option value="santa-teresa">Santa Teresa</option>
              <option value="maracana">Maracanã</option>
          </select>
          <button className='btn'><AiOutlineSearch className='icon'/></button>
        </div>
        <div className="toggle-product">
          <Link className='link-product' to='./../imoveis'>
            <p>{"Apartamento"} ao Aluguél</p>
          </Link>
          <Link className='link-product' to='./../imoveis'>
            <p>{"Apartamento"} à Temporada</p>
          </Link>
        </div>
      </div>     
    </div>
  )
}

export default ProductHead