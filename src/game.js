exports.game = function(){
  this.m_score = 0;
  this.roll = function(pins){
    this.m_score += pins;
  };
  this.score = function(){
    return this.m_score;
  };
};