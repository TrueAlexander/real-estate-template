import './ProductHead.css'

const ProductHead = () => {
  return (
    <div className="productHead">
      <h1>Imóveis à Venda</h1>
      <p>Escolhe um bairro interessado:</p>
      <button className='btn'>Botafogo</button>
      <button className='btn'>Flamengo</button>
      <button className='btn'>Lapa</button>
      <button className='btn'>Santa Teresa</button>
      <button className='btn'>Maracanã</button>
    </div>
  )
}

export default ProductHead