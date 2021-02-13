//Feb-01-2021 - 10
//Descending Order
function descendingOrder(num){
  return Number(num.toString().split("").sort( (a,b) => {return a < b}).join(""))
}

//Feb-01-2021 - 11
//Exes and Ohs
function XO(str) {
  let x = 0
  let o = 0
  str.toLowerCase().split("").forEach(letter => {
    if(letter === "x"){x++}
    else if (letter === "o"){o++}
  })
  if (x === o) {return true}
  else return false
}

//best practice without regex
const XOBest = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


//Feb-01-2021 -12
//Complementary DNA
function DNAStrand(dna){
  let dnaMap = {"A":"T", "C":"G", "T":"A", "G":"C"}
  let complimentary  = ""
  dna.split("").forEach(letter => {
    complimentary += dnaMap[letter]
  })
  return complimentary
}

//best practice 
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//Feb-01-2021 - 14
//Take a Ten Minute Walk
function isValidWalk(walk) {
  if (walk.length !== 10){
    return false
  }else{
    let reduced = walk.reduce((obj, item) => {
    if (!obj[item]){
      obj[item] = 0
      }
        obj[item]++
        return obj
    }, {})
    if (reduced.n === reduced.s  && reduced.e === reduced.w){
      return true
    } else return false
  }
}

//best practice - but it loops the array 4 times (only if it has 10 elements)
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

