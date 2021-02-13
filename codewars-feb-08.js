
  //Feb-08-2021 - 42
  //Remove String Spaces
  function noSpace(x){
    return  x.split("").filter(el => {return el!==" "}).join("")
  }
  
  //best 
  function noSpaceBest(x){return x.split(' ').join('')}
  //Feb-08-2021 - 43
  //Grasshopper - Summation
  var summationBest = function (num) {
    return (num > 1) ? num + summation(num - 1):num;
  }
  //Feb-08-2021 - 44
  //Counting sheep...
  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => el===true).length
  }
  
  //Feb-08-2021 - 45
  //Unique In Order
  function uniqueInOrder(iterable){
    if (typeof(iterable) === "string"){
      iterable = Array.from(iterable)
    }
    let collector = []
    for(let i = 0; i <= iterable.length; i++){
      console.log(iterable[i], iterable[i+1])
      if (iterable[i] !== iterable[i+1]){
        collector.push(iterable[i])
      }
    }
    return collector
  }
  
  //best
  var uniqueInOrderBest=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
  }
  
  
