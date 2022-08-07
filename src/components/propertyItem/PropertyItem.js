import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'
import './PropertyItem.css'
import ModalGallery from '../modalGallery/ModalGallery'
import { useState } from 'react'

const PropertyItem = () => {

    const [modalActive, setModalActive] = useState(false)

    const clickHandler = () => {
        setModalActive(true)
    }

  return (
    <div className="property">
      <div className='container'>
        <img className='span-3 image-grid-row-2' src={House1} alt='' onClick={clickHandler} />
        <img src={Bed1} alt='' onClick={clickHandler} />
        <img src={Bed2} alt='' onClick={clickHandler} />
        <img src={Kitchen} alt='' onClick={clickHandler} />
        <img src={Bathroom} alt='' onClick={clickHandler} />
        <div className='span-3 img-details'>
            <div className='top'>
                <h3>R. Nelson Mandela, Rio de Janeiro, RJ</h3>
                <p>Casa à venda</p>
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
            <button className='btn'><a href="https://wa.me/5521967261434">Fale conosco</a></button>
        </div>
      </div>
      <div className="container">
        <ModalGallery active={modalActive} setActive={setModalActive} />
      </div>
    </div>
    

    
  )
}

export default PropertyItem