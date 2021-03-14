//Lost number in number sequence
function findDeletedNumber(original, mixArr) {
    if (mixArr.length <= 0){return 0}
    else{
      let originalR = original.reduce( (a,c) => a+c)
      let mixR = mixArr.reduce( (a,c) => a+c)
      
      return originalR - mixR
    }
  }

  function findDeletedNumberBest(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }