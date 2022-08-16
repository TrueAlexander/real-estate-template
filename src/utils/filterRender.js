import dataProp from '../dataProp.json'
import PropertyItem from '../components/propertyItem/PropertyItem'

const filterRender = (purpose, type, zone) => {
  
  console.log(purpose, type, zone)
  // filtering dataProp
  const filteredArr = dataProp.filter((item) => {
    if ((item.purpose === purpose || purpose === "Todos")
        && (item.type === type || type === "Todos")
        && (item.zone === zone || zone === "Todos")) return item
  })
  //rendering results
  return filteredArr.map((item => {
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
  }))
}

export default filterRender