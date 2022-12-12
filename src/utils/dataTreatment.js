
let dataTreatment = ({name, amount, unit}) => {
  
  return { name: name.toUpperCase(), amount: amount === 0 ? undefined : parseInt(amount), unit }
  
}

export default dataTreatment