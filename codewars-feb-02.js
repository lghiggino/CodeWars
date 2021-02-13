//Feb-02-2021 - 15
//Replace With Alphabet Position
function alphabetPosition(text){

  text.split("");
  let char = "";
  let arr = [];
  let arr2
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  
  for(let i = 0; i < text.length; i++){
    char = text.charAt(i).toLowerCase();
    
    if(alphabet.indexOf(char) > -1){
      arr.push(alphabet.indexOf(char) + 1);
      arr2 = arr.join(" ");
    }
  }
   if(arr2 === undefined){
    return ""
   }
  return arr2;
}

//best solution
function alphabetPositionBest(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

//Feb-02-2021 - 16
//Your order, please
function order(words){
  if (!words){return ""}
  else{
     let array = words.split(" ")
     let ordered = []
     console.log(array)
     for(let j = 1; j<=9; j++){
       for(let i = 0; i < array.length; i++){
         if(array[i].includes(j)){
            ordered.push(array[i])
         }
       }
     }
    return ordered.join(" ")
  }
}

//best solution - regex onceagain
function orderBest(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    


//Feb-02-2021 - 17
//Beginner Series #3 Sum of Numbers
function getSum( a,b ){
  if (a === b){return a}
  else{
    let reduced = 0
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
      reduced += i
    }
    return reduced
  }
}

//best solution - quick mafs
const GetSumBest = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

