//Feb-05-2021 - 31
//Holiday III - Fire on the boat
function fireFight(str){
  str = str.split(" ")
  for (let i = 0; i < str.length; i++){
    if (str[i] === "Fire"){
      str[i] = "~~"
    }
  }
  return str.join(" ")
}

//best
const fireFightBest = s =>
  s.replace(/Fire/g, `~~`);

//Feb-05-2021 - 32
//Element equals its index
function indexEqualsValue(a) {
  a.forEach((el,idx) => {
    console.log(el, idx, el === idx)
    if(el === idx){
      return idx
    }
  })
  return -1;
}

//best with superfast method
function indexEqualsValueFast(a) {
  let i = 0
  for (; i<a.length; i++){
     if (i === a[i]){
       break; 
     }
   }
   return i === a.length ? -1 : i; 
 }

//Feb-05-2021 - 33
//My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse();
}
