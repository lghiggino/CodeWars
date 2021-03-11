//Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
  let i = 0
  while (i < this){
    f(i)
    i++
  }
}

//What's up next?
function nextItem(xs, item) {
  let found = false
  for (let el of xs) {
    if (found) return el;
    if (el == item) {found = true};
  }
}

const nextItemSymbol = (xs, item) => {
  const iter = xs[Symbol.iterator]();
  for (let el of iter) {
    if (el === item) return iter.next().value;
  }
};
