//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch(operator){
      case("add"):
      return a+b
      case("subtract"):
      return a-b
      case("multiply"):
      return a*b
      case("divide"):
      return a/b
  }
}

const arithmeticClever = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);

//Sum of a sequence
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  if (begin == end)return begin
  else{
    let sum = 0
    for (let i = begin; i <=end; i +=step){
      sum +=i
    }
    return sum
  }
};

sequenceSumRecursive = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

//Anagram Detection
var isAnagram = function(test, original) {
  test = test.toLowerCase().split("").sort()
  original = original.toLowerCase().split("").sort()
  for (let i = 0; i < Math.max(test.length, original.length); i++){
    if (test[i] !== original[i]){
      return false
    }
  }
  return true
};

var isAnagramBest = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};

//Summing a number's digits
function sumDigits(number) {
  return Math.abs(number).toString().split("").reduce( (a,c) => parseInt(a) + parseInt(c), 0)
}
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}

//






