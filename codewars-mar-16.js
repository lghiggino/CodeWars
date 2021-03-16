//partsSums
function partsSums(ls) {
  ls.unshift(0)
  let reduced = ls.reduce( (acc,curr) => acc+curr, 0)
  return ls.map(el => reduced = reduced-el)
}

//add Length
function addLength(str) {
 return str.split(" ").map(el => `${el} ${el.length}`)
}

//Merge two sorted arrays
function mergeArrays(arr1, arr2) {
  return Array.from(new Set (arr1.concat(arr2).sort((a,b) => a-b)))
}



