import './ProductHead.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductHead = () => {
  return (
    <div className="productHead">
      <div className="container">
      <div className="toggle-product">
          <Link className='link-product' to='./../imoveis'>
            <p>{"Todos"}</p>
          </Link>
          <Link className='link-product' to='./../imoveis'>
            <p>{"Casa"}</p>
          </Link>
          <Link className='link-product' to='./../imoveis'>
            <p>{"Kitnet"}</p>
          </Link>
        </div>
        <h1>{"Apartamento"} <span>{"à Venda"}</span></h1>
        <div className="productHead-row">
          <h3>Escolha o bairro:</h3>
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
          <Link className='link-product blue' to='./../imoveis'>
            <p>{"Apartamento"} para Aluguel</p>
          </Link>
          <Link className='link-product blue' to='./../imoveis'>
            <p>{"Apartamento"} para Temporada</p>
          </Link>
        </div>
      </div>     
    </div>
  )
}

export default ProductHead