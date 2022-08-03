import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'
import './PropertyItem.css'

const PropertyItem = () => {
  return (
    <div className="property">
      <div className='container'>
        <img className='span-3 image-grid-row-2' src={House1} alt='' />
        <img src={Bed1} alt='' />
        <img src={Bed2} alt='' />
        <img src={Kitchen} alt='' />
        <img src={Bathroom} alt='' />
        <div className='span-3 img-details'>
            <div className='top'>
                <h2>888, R. Nelson Mandela, Rio de Janeiro, RJ</h2>
                <p>Casa de venda</p>
                <p className='price'>R$2,677,000</p>
            </div>
            <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>Dormitorios:</p><p>5</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Banheiros:</p><p>7</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Área total:</p><p>8,138</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bairro:</p><p className='bold'>Botafogo</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='span-2 right-img-details'>
            <p>Uma bela casa moderna na cidade com uma piscina em tamanho real. Casa espaçosa e luxuosa localizada em Botafogo, RJ. Incluindo sala de mídia, academia de ginástica e sauna embutida. </p>
            <button className='btn'>Fale conosco</button>
        </div>
    </div>

  </div>
    

    
  )
}

export default PropertyItem