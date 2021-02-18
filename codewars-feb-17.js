function grow(x){
   return x.reduce( (acc,curr) => {return acc * curr},1)
}

function rentalCarCost(d) {
  let total = 0
  if(d >= 7){
    total -= 50
  }else if (d >= 3){
    total -= 20
  }
  total += d*40
  return total
}

const rentalCarCostBest = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
