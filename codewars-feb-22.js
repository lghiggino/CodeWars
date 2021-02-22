function wave(str){
  let res = []
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++){
    let copy = str.split("");
    if(copy[i] !== " ") {
    copy[i] = copy[i].toUpperCase()
    res.push(copy.join(""))
    }
  }
  return res
}


function trouble(x, t){
  for(var i=0; i<x.length; i++) {
    if(x[i]+x[i+1]===t) {
      x.splice(i+1,1);
      i--;
    }
  }
  
  return x;
}


const stringy = x => ''.padStart(x,'10');
