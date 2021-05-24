function noOdds( values ){
  return values.filter(item => item % 2 === 0)
}

function travel(r, zipcode) {
  
    if (r.indexOf(zipcode) === -1) return `${zipcode}:/`
    else{
      let arrayOfStreets = r.split(",")
      .filter(item => item.includes(zipcode))
      .map(item => item.slice(0, item.indexOf(zipcode)))
      .map(item => item.slice(item.indexOf(" ")).trim())

      let arrayOfNumbers = r.split(",")
        .filter(item => item.includes(zipcode))
        .map(item => item.slice(0, item.indexOf(zipcode)))
        .map(item => item.slice(0, item.indexOf(" ")).trim())

      return `${zipcode}:${arrayOfStreets.join(",")}/${arrayOfNumbers.join(",")}`
    }
}
