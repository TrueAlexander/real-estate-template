import Whatsapp from "../../assets/whatsapp.png"
import './WhatsappIcon.css'
import 'animate.css'


const WhatsappIcon = () => {
  return (
    <div className="whatsapp animate__delay-10s animate__animated animate__pulse animate__slow animate__infinite" title="Fale conosco">
      <a href="https://wa.me/5521967261434"><img src={Whatsapp} alt="Fale conosco" /></a>
    </div>
  )
}

export default WhatsappIcon