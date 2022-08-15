import './ModalGallery.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation} from 'swiper'
import { useEffect } from 'react'



const ModalGallery = ({active, setActive, photosArr}) => {
  
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
          >
            {photosArr.reverse().map((item, index) => {
              return <SwiperSlide 
                        key={index} 
                        className="modal-slide">
                        <div className="modal-card">
                          <img 
                            src={item} 
                            alt={"property" + index} 
                          />
                        </div>
                      </SwiperSlide>
              })}
          </Swiper>
          <button className='btn' onClick={() => setActive(false)}>Fechar</button>
        </div> 
      </div>
  )
}

export default ModalGallery