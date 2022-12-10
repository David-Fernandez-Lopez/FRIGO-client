
let dataTreatment = ({name, amount, unit}) => {
  
  return { name: name.toUpperCase(), amount: parseInt(amount), unit }
  
}

export default dataTreatment