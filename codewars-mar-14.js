//test
function isVowLazy(a){
    return a.map(el => {
      if (el === 97) {return "a"}
      if (el === 101) {return "e"}
      if (el === 105) {return "i"}
      if (el === 111) {return "o"}
      if (el === 117) {return "u"}
      else return el
    })
  }

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVowBest=a=>a.map(x=>v[x]||x)