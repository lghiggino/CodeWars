//Sum Mixed Array
function sumMix(x){
  return x.reduce( (acc, curr) => {return +curr + acc},0)
}

//remove "!"
function removeExclamationMarks(s) {
  return s.split("").filter(el => el != "!").join("")
}


//Correct the mistakes of the character recognition software
function correct(string){
  return string.split("").map(el => {
    if (el === "5"){return "S"}
    if (el === "0"){return "O"}
    if (el === "1"){return "I"}
    else return el
  }).join("")
}


correctBest = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

//Breaking chocolate problem
function breakChocolate(n,m) {
  return (m <= 0 || n <= 0) ? 0 : (m*n)-1
}

//
