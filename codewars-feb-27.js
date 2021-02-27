function shortestDistance(a, b, c) {
  return Math.min(
     Math.sqrt( (a**2) + (b+c) * (b+c)),
     Math.sqrt( (b**2) + (a+c) * (a+c)),
     Math.sqrt( (c**2) + (a+b) * (a+b)),
  )
}
