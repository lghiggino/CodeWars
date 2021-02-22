const indexOf = (words, target) => {
  let min = 0, max = words.length - 1, curr;
  while (min < max) {
    curr = parseInt((min + max) / 2);
    if (words[curr].length < target.length) {
      min = curr + 1
    } else {
      max = curr - 1;
    }
  }
  return words.indexOf(target, min)
}
