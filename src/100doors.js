'use strict';

exports.doors = function(){
  this.state = Array(100).fill(0);
  this.getState = function(){
    return this.state;
  };
  this.toggleOne = function(door){
    if (door === 0){
      return 1;
    } else if (door === 1){
      return 0;
    } else {
      throw new Error();
    }
  };

  this.toggleAll = function(num){
    this.state = this.state.map(function(el, i){
      return this.toggleOne(el);
    }, this);
  };

};
