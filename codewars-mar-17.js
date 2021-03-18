//Largest 5 digit number in a series
function solution(digits){
   let biggest = 0
   for (let i = 0; i < digits.length-4; i++){
     if (Number(digits.slice(i,i+5)) > biggest){
       biggest = Number(digits.slice(i,i+5))
     }
   }
  return biggest
}

function solutionBest(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring -> substring is more readable in this case than slice
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

//
function bouncingBall(initial, proportion) {
  let height = initial
  let bounces = 0
  while (height > 1){
    height *= proportion
    bounces++
  }
  return bounces
};

//Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  return str.match(/[a-zA-Z]/g).reverse().join("")
}

function reverseLetterNonRegex(str) {
  return str.split('').reverse().filter(function(el) {
    if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
      return el;
    }
  }).join('');
}

//
