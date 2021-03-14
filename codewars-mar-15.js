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