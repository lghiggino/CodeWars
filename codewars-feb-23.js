function replaceAll(seq, find, replace) {
  if (Array.isArray(seq)){
    return seq.map(el => {
    if (el === find){return replace}
    if (el !== find){return el}
  })
  }else{
    return seq.split(find).join(replace)
  }
}

function replaceAllBest(seq, find, replace) {
  return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
}

function divisibleBy(numbers, divisor){
  let res = []
  numbers.forEach(number => {
    if (number % divisor === 0){
      res.push(number)
    }
  })
  return res
}

function divisibleByBest(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}
