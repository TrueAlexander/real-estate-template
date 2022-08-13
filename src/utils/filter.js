import dataProp from './../dataProp.json'

const filter = (purpose, type, zone) => {
  
  console.log(purpose, type, zone)
  const res = dataProp.filter((item) => {
    if (item.purpose === purpose
        && (item.type === type || type === "Todos")
        && (item.zone === zone || zone === "Todos")) return item
  })
  return res
}

export default filter