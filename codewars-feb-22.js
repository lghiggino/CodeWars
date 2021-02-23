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


function nextIdBest(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}

function toCsvText(array) {
   return array.join('\n');
}


function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

