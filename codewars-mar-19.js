//Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  let cat1 = Math.abs(a.x - b.x)
  let cat2 = Math.abs(a.y - b.y)
  let h = Math.sqrt(cat1**2 + cat2**2)
  return Number(h.toFixed(6))
}

function distanceBetweenPointsBest(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
