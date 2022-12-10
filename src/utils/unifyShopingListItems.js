
let unifyShopingListItems = (data) => {

  let dataCopy = [...data]
  if(data.length > 1){

    let unifiedItem = []
    
    let items = dataCopy.map(item => [item.name,item.amount,item.unit])
  
    for (let i=0 ; i<items.length; i++){
      for (let j=i+1 ; j<items.length; j++){
        if(items[i][0] === items[j][0] && items[i][2] === items[j][2]){
          unifiedItem.push({
            name: items[i][0],
            amount: items[i][1] + items[j][1],
            unit: items[i][2]
          })
        } else if(items[i][0] === items[j][0] && items[i][2] !== items[j][2]){
            return dataCopy
        }
      }
    }
    const filtered = dataCopy.filter(elm =>elm.name !== unifiedItem[0].name) 
  
   return [...filtered, ...unifiedItem]
  } else {
    return dataCopy
  }
}

export default unifyShopingListItems