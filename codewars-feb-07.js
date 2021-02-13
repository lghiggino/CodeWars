
  //Feb-07-2021 - 37
  //Evens and Odds
  function evensAndOdds(num){
      return num % 2 === 0 ? num.toString(2) : num.toString(16);
  }
  //Feb-07-2021 - 38
  //
  function rgb(r, g, b){
    if (r <=0){r = 0}
    if (g <=0){g = 0}
    if (b <=0){b = 0}
    if (r > 255){r = 255}
    if (g > 255){g = 255}
    if (b > 255){b = 255}
    r = r.toString(16).toUpperCase()
    g = g.toString(16).toUpperCase()
    b = b.toString(16).toUpperCase()
    console.log(r.toString(16).toUpperCase(), g.toString(16).toUpperCase(), b.toString(16).toUpperCase())
    if (r === "0"){r = "00"}
    if (g === "0"){g = "00"}
    if (b === "0"){b = "00"}
    console.log(r.toString(16).toUpperCase(), g.toString(16).toUpperCase(), b.toString(16).toUpperCase())
    return `${r}${g}${b}`
  }
  console.log(rgb(13,299,92))
  
  
  //Feb-07-2021 - 39
  //RGB To Hex Conversion
  function rgb(r, g, b){
    if (r <=0){r = 0}
    if (g <=0){g = 0}
    if (b <=0){b = 0}
    if (r > 255){r = 255}
    if (g > 255){g = 255}
    if (b > 255){b = 255}
    r = r.toString(16).toUpperCase().padStart(2,"0")
    g = g.toString(16).toUpperCase().padStart(2,"0")
    b = b.toString(16).toUpperCase().padStart(2,"0")
    
    return `${r}${g}${b}`
  }
  
  //best
  function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }
  
  
  //Feb-07-2021 - 40
  //Pete, the baker
  function cakes(recipe, inventory) {
    let ammount = []
    for (item in recipe){
      if (!inventory.hasOwnProperty(item)){
        return 0
      }else {
        ammount.push(Math.floor(inventory[item] / recipe[item]))
      }
    }
    return Math.min(...ammount)
  }
  
  //pete the basker best
  function cakesBest(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }
  //Feb-08-2021 - 41
  //Bit Counting
  var countBits = function(n) {
    let count = 0
    n = n.toString(2).split("").forEach(el => {if (el === "1"){count++}})
    return count
  };
  
  //best
  countBitsBest = n => n.toString(2).split('0').join('').length;
  

