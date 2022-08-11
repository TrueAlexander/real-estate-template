import './PropertyItem.css'
import ModalGallery from '../modalGallery/ModalGallery'
import { useState } from 'react'

const PropertyItem = ({
    id,
    address,
    price,
    zone,
    type,
    rooms_num,
    bath_num,
    area,
    description,
    purpose,
    featured,
    photo_main,
    photos,
}) => {

    const [modalActive, setModalActive] = useState(false)

    const clickHandler = () => {
        setModalActive(true)
    }

  return (
    <div className="property">
      <div className='container'>
        <img className='span-3 image-grid-row-2' src={photo_main} alt='' onClick={clickHandler} />
        {photos.map((item, index) => {
            return <img key={index} src={item} alt='' onClick={clickHandler} /> 
        })}
        <div className='span-3 img-details'>
            <div className='top'>
                <h3>{address}</h3>
                <h2 className='bold blue'>{type}</h2>
                <p className='price'>R$ {price}</p>
            </div>
            <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>Imóvel:</p><p className='bold blue'>{purpose}</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Dormitorios:</p><p>{rooms_num}</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Banheiros:</p><p>{bath_num}</p>
                    </div>
                    </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Área total:</p><p>{area}</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bairro:</p><p className='bold blue'>{zone}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='span-2 right-img-details'>
            <p>{description}</p>
            <button className='btn'><a href="https://wa.me/5521967261434">Fale conosco</a></button>
        </div>
      </div>
      <div className="container">
        <ModalGallery 
            active={modalActive} 
            setActive={setModalActive}
            photosArr={[...photos, photo_main]} 
        />
      </div>
    </div>
    

    
  )
}

export default PropertyItem