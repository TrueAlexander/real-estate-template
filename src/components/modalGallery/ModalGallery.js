import './ModalGallery.css'

const ModalGallery = ({active, setActive, children}) => {
  
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()} >
        <h1>REACT SWIPER SLIDER</h1> 
      </div> 
    </div>
  )
}

export default ModalGallery