//Does my number look big in this?
function narcissistic(value) {
  let string = value.toString()
  let mapped = string.split("").map(el => {
    return Math.pow(+el, string.length)
  })
  let reduced = mapped.reduce( (acc,curr) => acc+curr,0)
  return reduced === value
}

function narcissisticPretty(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}

//Beeramid
var beeramid = function(bonus, price) {
  let beerCans = Math.floor(bonus/price)
  let layerCount = 0
  let i = 1
  while (i <= beerCans){
    layerCount++
    beerCans -= i**2
    i++
    if(beerCans < i**2){return layerCount}
  }
 
  return layerCount
}

var beeramidBest = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}
