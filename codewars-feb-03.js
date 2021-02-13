//Feb-03-2021 - 18
//Square Every Digit
function squareDigits(num){
  return Number(num.toString().split("").map(el => el**2).join(""))
}

//Feb-03-2021 - 19
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort( (a,b) => a-b)
  return numbers[0] + numbers[1]
}

//Feb-03-2021 - 20
//Multiplicative Persistence... What's special about 277777788888899?
function per(n) {
  let res = []
  while(n.toString().length > 1) {
    n = n.toString().split('').reduce(
      (p,c) => p * c
    )
    res.push(n)
  }
  return res
}

//Feb-03-2021 - 21
//Persistent Bugger.
function persistence(n) {
  let res = 0
  while(n.toString().length >1){
     n = n.toString().split("").reduce(
       (p,c) => p * c
     )
    res++
  }
 return res
}

//Feb-03-2021 - 22
//Find the unique number
function findUniq(arr) {
  let reduced = arr.reduce( (obj, item) => {
    if (!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
  },{})
  
    for (key in reduced){
      if (reduced[key] === 1){
        return Number(key)
      }
    }

  }

//Best solution - AAAAAAAARGGGGGGGGG! It even had find in the name! Cmon, man
function findUniqBest(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

//Feb-03-2021 - 23
//Sort the odd
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
}

//Feb-03-2021 - 24
//Opposite number - a 8Kyu just to ease my mind
function opposite(number) {
  return -number;
}

//Feb-03-2021 - 25
//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Feb-03-2021 - 26
//Is the string uppercase? - 8 kyu OOP - this one counts
String.prototype.isUpperCase = function() {
  return this.split("").every(el => {
      if(el.toUpperCase() == el){
         return true
      }else return false
  })                    
 }

 //best solution - fucks sake... ahaha
 String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

//Feb-03-2021 - 27
//Find the divisors! 
function divisors(integer) {
  let dividers = []
  for (let i = 2; i < integer; i++){
    if (integer % i === 0){
      console.log(i)
      dividers.push(i)
    }
  }
  if (!dividers.length){
    return `${integer} is prime`
  } else return dividers
};

