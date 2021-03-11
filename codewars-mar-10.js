//Making Copies
function copyList(l){
  let arr = []
  for (let i = 0; i < l.length; i++){
    arr.push(l[i])
  }
  return arr
}

function copyListBest(l){
  return l.slice()
}

//Maximum Product 
function adjacentElementsProduct(array) {
  let maxes = []
  for (let i = 0; i < array.length-1; i++){
    maxes.push(array[i] * array [i+1])
  }
  return Math.max(...maxes)
}
