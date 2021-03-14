//1RM Calculator
function calculate1RM(w, r){
  if (r < 1) return 0
  if (r === 1){return w}
  else{
    let epley = w * (1 + (r/30))
    let mcG = (100 * w) / (101.3 - 2.67123*r)
    let lombardi = w * (r ** 0.10)
    return Math.round(Math.max(epley, mcG, lombardi))
  }
}

function calculate1RMBest(w, r) {

  if (r <= 1) return r * w;

  let   epley = w * (1 + r / 30)
  , mcglothin = 100 * w / (101.3 - 2.67123 * r)
  ,  lombardi = w * Math.pow(r, 0.1);

  return Math.round(Math.max(epley, mcglothin, lombardi));

}
