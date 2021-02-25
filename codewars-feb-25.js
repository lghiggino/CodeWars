//Regular Ball Super Ball
var Ball = function(ballType) {
  if (!ballType){return this.ballType = "regular"}
  else {return this.ballType = ballType}
};

var BallBest = function(ballType) {
  this.ballType = ballType || 'regular';
};

//Improving Math.round(x)
Math.roundTo = function (number, precision) {
  return +(number.toFixed(precision))
}

//Two fighters, one winner.
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker === fighter1.name){
    while (fighter2.health > 0 || fighter1.health > 0){
      fighter2.health -= fighter1.damagePerAttack  
      if (fighter2.health <= 0){return fighter1.toString()}
      else {
        fighter1.health -= fighter2.damagePerAttack 
        if (fighter1.health <= 0){return fighter2.toString()}
      }
    }
  }else{
    while (fighter1.health > 0 || fighter2.health > 0){
      fighter1.health -= fighter2.damagePerAttack  
      if (fighter1.health <= 0){return fighter2.toString()}
      else {
        fighter2.health -= fighter1.damagePerAttack 
        if (fighter2.health <= 0){return fighter1.toString()}
      }
    }
  }
}

function declareWinnerBest(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}

//Color Ghost
var Ghost = function() {
  let colors = ["white", 'yellow', "purple", "red"]
  let random = function(){return Math.floor(Math.random() * 4)}
  this.color = colors[random()]
};

var GhostBest = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * (colors.length));
  this.color = colors[colorIndex];
};


//"this" is an other problem
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    set: function(value) {
      let splitNames = value.split(" ");
      if (splitNames.length === 2) {
        this.firstName = splitNames[0];
        this.lastName = splitNames[1];
      }
    },
    get: function() {
      return this.firstName + ' ' + this.lastName;
    }
  });
}















