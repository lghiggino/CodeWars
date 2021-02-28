//Separate basic types
function separateTypes(input) {
  let resObj = {}
  input.forEach(el => {
    if (!resObj.hasOwnProperty(typeof(el))){
      resObj[typeof(el)] = []
    }
    resObj[typeof(el)].push(el)
  })
  return resObj
}

//how I wanted to actually make mine:
function separateTypesBest(input) {
  return input.reduce((types, value) => {
    const valueType = typeof value
    const type = types[valueType]
    types[valueType] = type ? [...type, value] : [value]
    return types
  }, {})
}

//Short Long Short
function solution(a, b){
  return (a.length > b.length) ? b+a+b : a+b+a
}

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce( (a,c) => a+c,0)/classPoints.length
  return yourPoints > average
}


//Printer Errors
function printerError(s) {
    let errorLetters = "nopqrstuvwxyz"
    let errorCount = 0
    s.split("").forEach(lttr => {
      if (errorLetters.includes(lttr)){
        errorCount++
      }
    })
    return `${errorCount}/${s.length}`
}

function printerErrorBest(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

//Categorize New Member
function openOrSenior(data){
  let res = []
  let flat = []
  data.forEach(el => {return flat.push(el[0], el[1])})
  //data = data.flat() -> flat doesn't work
  for (let i = 0; i < flat.length; i += 2){
    if (flat[i] >=55 && flat[i+1] > 7){
      res.push("Senior")
    }else res.push("Open")
  }
  return res
}


function openOrSeniorBest(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


//Reverse words
function reverseWords(str) {
  return str.split(" ").map(el => el.split("").reverse().join("")).join(" ")
}


//Maximum Multiple
function maxMultiple(divisor, bound){
  for (let i = bound; i >= divisor; i--){
    if (i % divisor === 0) return i
  }
}


function maxMultipleBest(divisor, bound){
  return bound-bound%divisor
}

//Remove anchor from URL
function removeUrlAnchor(url){
  return url.split("#")[0]
} 

//Find the capitals
var capitals = function (word) {
  let res = []
  word.split("").forEach( (el,idx) => {
    if (el === el.toUpperCase()){
      res.push(idx)
    }
  })
  return res
};

//Alternate capitalization
function capitalize(s){
  let output1 = ""
  let output2 = ""
  for (let i = 0; i < s.length; i++){
    if (i % 2 === 0){
      output1 += s[i].toUpperCase()
      output2 += s[i].toLowerCase()
    }else{
      output1 += s[i].toLowerCase()
      output2 += s[i].toUpperCase()
    }
  }
  return [output1, output2];
};

function capitalizeBest(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

//











































































