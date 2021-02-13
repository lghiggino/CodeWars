//Feb-04-2021 - 28
//Get the mean of an array
function getAverage(marks){
  let reduced = marks.reduce( (acc,curr) => acc +curr)
  return Math.trunc(reduced/marks.length)
}

//Feb-04-2021 - 29
//Do I get a bonus?
function bonusTime(salary, bonus) {
  if(!bonus) return `£${salary}`
  else return `£${salary * 10}`
 }

//Feb-04-2021 - 30
//Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}

