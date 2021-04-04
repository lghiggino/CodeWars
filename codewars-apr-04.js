var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 1){return [1,15,15]}
  if (humanYears == 2){return [2,24,24]}
  else{
    let sumCat = 0
    let sumDog = 0
    for (let i = 0; i < humanYears - 2; i++){
      sumCat += 4
      sumDog += 5
    }
    return [humanYears,24+sumCat,24+sumDog];
  }
  
}
