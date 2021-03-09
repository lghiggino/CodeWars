//Hells Kitchen
function gordon(a){
 return a.toUpperCase().split("").map(el => {
    if (el === "A") return "@"
    if (el === "E" || el === "I" || el === "O" || el === "U"){return "*"}
    else return el
  }).join("").split(" ").join("!!!! ")+"!!!!"
}

function gordonBest(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}

//


