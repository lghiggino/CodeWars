//Feb-13-2021 - 52
//Double Sort
function dbSort(array){
    let numbersArray = []
    let stringsArray = []
    array.forEach(el => {
      //console.log(typeof(el))
      if (typeof(el) == "number"){
        numbersArray.push(el)
      }  else{
        stringsArray.push(el)
      }
    })
    console.log(numbersArray.sort( (a,b)=>{return a-b}).concat(stringsArray.sort()))
}

//FIIIIIIILLLLLLLLTTTTTTTTEEEEEEEERRRRR MMMMMMMMEMEEEEETETTTTTTTHHHHHHHOOOOOOOOD!
function dbSortBest(a){
    let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
    let string = a.filter(x => typeof x == 'string').sort()
    return num.concat(string)
  }