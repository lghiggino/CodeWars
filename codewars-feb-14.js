var maxRedigit = function(num) {
  let numLength = num.toString().split("").length
  if (num <= 0 || numLength !== 3) return null
  else return Number(num.toString().split("").sort((a,b) => {return b-a}).join(""))
};


//scramble
function scramble(inventory, string) {
  let stringObject = string.split("").reduce((obj, item) => {
    if (!obj[item]){
       obj[item] = 0
    }
      obj[item]++
      return obj
  },{})
  
  let inventoryObject = inventory.split("").reduce((obj, item) => {
    if (!obj[item]){
       obj[item] = 0
    }
      obj[item]++
      return obj
  },{})
  
console.log(inventoryObject)
console.log(stringObject)
  
  for (el in stringObject){
    console.log(el, "inventoryObj", inventoryObject[el], "stringObj", stringObject[el])
    if (inventoryObject[el] === undefined){
      return false
    }
   else if (inventoryObject[el] < stringObject[el]){
      return false
    }
  }
  return true
}

//best
function scrambleBest(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}
