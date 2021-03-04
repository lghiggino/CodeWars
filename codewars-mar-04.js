function whatday(num) { 
  let arr = ["Wrong, please enter a number between 1 and 7", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return num > 0 && num < 8 ? arr[num] : arr[0]
}
