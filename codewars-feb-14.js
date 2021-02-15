var maxRedigit = function(num) {
  let numLength = num.toString().split("").length
  if (num <= 0 || numLength !== 3) return null
  else return Number(num.toString().split("").sort((a,b) => {return b-a}).join(""))
};
