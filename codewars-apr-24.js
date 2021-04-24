//Numbers to Letters

function switcher(arr){
 const code = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a',"!","?", "8"]
 let answer = []
 arr.forEach(el => {
  answer.push(code[Number(el)-1])
 })
 return answer.includes("8") ? answer.join("").split("8").join(" ") : answer.join("")
}

//best
switcher=x=>x.map(i=>'_zyxwvutsrqponmlkjihgfedcba!? '[i]).join``

//similar
function switcher( $ ){
  const arr = ['', "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "!", "?"," "];
  return $.map(Number).map(el => arr[el] ).join('')
}
