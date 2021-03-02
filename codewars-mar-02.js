//Wilson primes
function amIWilson(p) {
  let fatorial = 1
  for (let i = 1; i < p; i++){
    fatorial *= i
  }
  return (fatorial + 1) % (p*p) === 0
}

function amIWilsonRecursive(p) {
  function fact(x) {
    return x <= 1 ? 1 : x * fact(x-1);
  }
  
  return (fact(p-1) + 1) / (p*p) % 1 === 0;
}
