exports.game = function(){
  this.rolls = new Array(21);
  this.currentRoll = 0;

  this.roll = function(pins){
    this.rolls[this.currentRoll++] = pins;
  };
  this.score = function(){
    var score = 0;
    this.rolls.forEach(roll => {
      score += roll;
    });
    return score;
  };
};