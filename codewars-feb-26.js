function highestRank(arr){
  let reduced = arr.sort((a,b) => {return a-b}).reduce((obj,item) => {
    if(!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
  },{})
  
  let keyArr = Object.keys(reduced)
  let valueArr = Object.values(reduced)
  let max = Math.max(...valueArr)
  let indexOfMax = valueArr.lastIndexOf(max)
 
  return Number(keyArr[indexOfMax])
}


function highestRankBest(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}
