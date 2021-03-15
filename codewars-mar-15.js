//test
function anagrams(word, array) {
    let res = []
    let wordReduced = word.split("").reduce( (obj, elem) => {
        if (!obj[elem]){
            obj[elem] = 0
        }
        obj[elem]++
        return obj
    },{})

    for (let i = 0; i < array.length; i++){
        let elemReduced = array[i].split("").reduce( (obj, elem) => {
            if (!obj[elem]){
              obj[elem] = 0
            }
            obj[elem]++
            return obj
          },{})
        console.log(JSON.stringify(elemReduced), JSON.stringify(wordReduced))
        // if (JSON.stringify(elemReduced) === JSON.stringify(wordReduced)){
        //     res.push(array[i])
        // }
    }
    //return res
}

  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

  //Split Strings
  function solution(str){
    let res = [] 
    if(str.length % 2 !== 0){
       str = str+"_"
       for(let i = 0; i < str.length; i += 2){
         //console.log(str.slice(i,i+2))
         res.push(str.slice(i,i+2))
       }
     }else{
       for(let i = 0; i < str.length; i += 2){
         res.push(str.slice(i,i+2))
       }
     }
    return res
  }

  function solutionBest(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }

  //nth fibonacci
  const nthFibo = (n) => {
    if (n == 1) return 0
    if (n <= 3) return 1
    return nthFibo(n-1) + nthFibo(n-2)
  }