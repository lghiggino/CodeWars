//function SeriesSum(n){
function SeriesSum(n){
  let acc = 0
    for (let i = 1; i < (n*3); i = i+3 ){
      acc+= 1/i
    }
    return acc.toFixed(2)
}

function SeriesSumBest(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}


//Don't give me five!
function dontGiveMeFive(start, end){
  let arr = []
  for (let i = start; i <=end; i++){
    if(!i.toString().includes("5")){
      arr.push(i)
    }
  }
  return arr.length
}
