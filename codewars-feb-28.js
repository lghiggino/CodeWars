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
