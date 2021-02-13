
//Feb-09-2021 -46
//Is n divisible by x and y?
function isDivisible(n, x, y) {
 return n % x === 0 && n % y === 0 ?  true : false
}

//best 
function isDivisibleBest(n, x, y) {
  return n % x === 0 && n % y === 0
}

//Feb-09-2021 -47
//Convert number to reversed array of digits
function digitize(n) {
  return  n.toString().split("").reverse().map(el => +el)
  
}

//Feb-09-2021 -48
//Abbreviate a Two Word Name
function abbrevName(name){
  return name.toUpperCase().split(" ").map(el => el.slice(0,1)).join(".")
}
