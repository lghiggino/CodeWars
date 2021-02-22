//Find the next perfect square!
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1) ** 2 : -1 
}

function findNextSquareBEst(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

//Friend or Foe?
//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends){
  return friends.filter(item => item.length === 4)
}


