//Feb-06-2021 - 34
//Remove the minimum
function removeSmallest(numbers) {
    if (numbers.length == 0){ return []}
    else{
      let smallest = numbers[0]
      let index = 0
      for (let i = 1; i < numbers.length; i++){
        if(numbers[i] < smallest){
          smallest = numbers[i]
          index = i
        }
      }
      numbers.splice(index,1)
      return numbers
    }
  }
  
  //Remove the minimum best
  const removeSmallestBest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  //Feb-06-2021 - 35
  //Two to One
  function longest(s1, s2) {
    let fullStr = s1+s2
    let outputArr = []
    fullStr = fullStr.split("").forEach(el => {
       if(outputArr.indexOf(el) == -1){
          outputArr.push(el)
       }
    })
   
    outputArr.sort((a,b)=>{
      if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
    })
    return outputArr.join("")
  }
  
  //best
  function longestBest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }
  
  //Feb-06-2021 - 36
  //Find the unique number
  function findUnique(numbers) {
    for (el of numbers) {
      if (numbers.lastIndexOf(el) === numbers.indexOf(el)){
        return el
      }
    }
  }
  
