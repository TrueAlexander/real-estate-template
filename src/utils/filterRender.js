import dataProp from '../dataProp.json'
import PropertyItem from '../components/propertyItem/PropertyItem'
import 'animate.css'

const filterRender = (purpose, type, zone) => {
  
  console.log(purpose, type, zone)
  // filtering dataProp
  const filteredArr = dataProp.filter((item) => {
    if ((item.purpose === purpose || purpose === "Todos")
        && (item.type === type || type === "Todos")
        && (item.zone === zone || zone === "Todos")) return item
  })
  //rendering results
  return filteredArr.length > 0 ? filteredArr.map((item => {
    return <PropertyItem 
              key={item.id}
              address={item.address}
              zone={item.zone}
              price={item.price}
              type={item.type}
              rooms_num={item.rooms_num}
              bath_num={item.bath_num}
              area={item.area} 
              description={item.description}
              purpose={item.purpose}
              featured={item.featured}
              photo_main={item.photo_main}
              photos={item.photos}  
            />
  })) : <div className="animate__animated animate__fadeIn animate__slow">
          <h2 className='property-note'>Opa!..  Não foi encontrado ou disponivel atualmente o solicitado!</h2>
          <h2 className='property-note blue'>Por favor troque os parametros de busca!</h2>
        </div>
}

export default filterRender