import './ProductHead.css'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

const ProductHead = () => {
  return (
    <div className="productHead">
      <h1>Imóveis à Venda</h1>

      <p>Troque o bairro de busca:</p>
      <select name="zone" id="">
          <option value="all">Todos</option>
          <option value="botafogo">Botafogo</option>
          <option value="lapa">Lapa</option>
          <option value="flamengo">Flamengo</option>
          <option value="santa-teresa">Santa Teresa</option>
          <option value="maracana">Maracanã</option>
      </select>
      <button className='btn'><AiOutlineSearch className='icon'/></button>
      <Link to="./../" className='btn'>Voltar</Link>
    </div>
  )
}

export default ProductHead