
let unifyShopingListItems = (data) => {

  let dataCopy = [...data]

  let unifiedItem = []
  
  let items = dataCopy.map(item => [item.name,item.quantity,item.units])

  for (let i=0 ; i<items.length; i++){
    for (let j=i+1 ; j<items.length; j++){
      if(items[i][0] === items[j][0] && items[i][2] === items[j][2]){
        unifiedItem.push({
          name: items[i][0],
          quantity: items[i][1] + items[j][1],
          units: items[i][2]
        })
      }

          }
  }
  dataCopy.map(elem =>{
    if(elem.name === unifiedItem[0].name){
      dataCopy.shift(elem)
      dataCopy.pop(elem)
    }
  })
 return [...dataCopy, ...unifiedItem]
}

export default unifyShopingListItems