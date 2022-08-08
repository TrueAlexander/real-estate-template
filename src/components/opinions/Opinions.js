import './Opinions.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Opinions = () => {
  return (
    <div className="opinions">
      <h1 className="opinions-title">Opiniões de nossos clientes</h1>
      <Swiper
        className="slider"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
    
          720: {
            slidesPerView: 2,
          },
    
          1100: {
            slidesPerView: 3,
          }
        }}
        loop={true}
        navigation
        pagination={{ clickable: true, dynamicBullets: true, }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Parceria é a palavra chave para Falar de Maria Abreu Imóveis. A tranquilidade de ter meus imóveis administrados por ela não tem preço"
            </p>
            <p className="bold">
            José Rocha - Proprietário
            </p>
          </div>  
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Minha estadia no Rio de Janeiro, foi algo maravilhoso. Surpreendente foi o imóvel da Maria. Tudo perfeito ! Voltaremos!"
            </p>
            <p className="bold">
              Ana Pinho - Temporada
            </p>
          </div>    
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Compramos nosso primeiro apartamento com Maria. Não tivemos nenhum problema. Atendimento Impecável"
            </p>
            <p className="bold">
              Vania Lopes - Compra
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Parceria é a palavra chave para Falar de Maria Abreu Imóveis. A tranquilidade de ter meus imóveis administrados por ela não tem preço"
            </p>
            <p className="bold">
              José Rocha - Proprietário
            </p>
          </div>  
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Minha estadia no Rio de Janeiro, foi algo maravilhoso. Surpreendente foi o imóvel da Maria. Tudo perfeito ! Voltaremos!"
            </p>
            <p className="bold">
              Ana Pinho - Temporada
            </p>
          </div>    
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-card">
            <p>
              "Compramos nosso primeiro apartamento com Maria. Não tivemos nenhum problema. Atendimento Impecável"
            </p>
            <p className="bold">
              Vania Lopes - Compra
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Opinions