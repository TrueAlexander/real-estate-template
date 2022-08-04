import './About.css'
import Maria from './../../assets/Maria.jpg'

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">Sobre Nós</h1>
      <div className="container about-row">
        <div className="about-item">
          <div className="about-img">
            <img src={Maria} alt="Maria Imóveis" />
          </div>
        </div>
        <div className="about-item">
          <div className="about-text">
            <p>Sasha Abreu, iniciou suas atividades visando construir a sua história no mercado imobiliário do Rio de Janeiro, de forma sólida, confiável e duradoura. </p>
            <p>A atuação acontece com dinamismo e profissionalismo na prestação dos serviços. Venha nos conhecer!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About