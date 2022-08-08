import './ModalGallery.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper'
import { useEffect } from 'react'

import Bed2 from '../../assets/bed2.jpg'
import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'


const ModalGallery = ({active, setActive}) => {
  
  useEffect(() => {
    active ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }, [active])

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()} >
        <h2>Fotos do imóvel</h2>
        <Swiper
          className="modal-slider"
          modules={[Navigation,]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="modal-slide">
            <div className="modal-card">
              <img src={House1} alt="property" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="modal-slide">
            <div className="modal-card">
              <img src={Kitchen} alt="property" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="modal-slide">
            <div className="modal-card">
              <img src={Bed2} alt="property" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="modal-slide">
            <div className="modal-card">
              <img src={Bathroom} alt="property" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="modal-slide">
            <div className="modal-card">
              <img src={Bed1} alt="property" />
            </div>
          </SwiperSlide>  
        </Swiper>
        <button className='btn' onClick={() => setActive(false)}>Fechar</button>
      </div> 
    </div>
  )
}

export default ModalGallery