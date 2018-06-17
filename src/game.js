exports.game = function(){
  this.rolls = [];
  this.currentRoll = 0;

  this.roll = function(pins){
    this.rolls[this.currentRoll++] = pins;
  };
  this.score = function(){
    var score = 0;
    var frameIndex = 0;
    for (frame = 0; frame < 10; frame++){
      if (this.isStrike(frameIndex)){
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this.isSpare(frameIndex)){
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  };

  this.isSpare = function(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10;
  };

  this.isStrike = function(frameIndex){
    return this.rolls[frameIndex] === 10;
  };

  this.sumOfBallsInFrame = function(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex+1];
  };

  this.spareBonus = function(frameIndex){
    return this.rolls[frameIndex+2];
  };

  this.strikeBonus = function(frameIndex){
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
  }
};