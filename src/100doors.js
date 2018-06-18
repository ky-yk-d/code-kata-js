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
      throw new Error('illegalArgument');
    }
  };

  this.toggleAll = function(num){
    this.state = this.state.map(function(el, i){
      if ((i + 1) % num === 0){
        el = this.toggleOne(el);
      }
      return el;
    }, this);
  };

  this.getIndexesOfOpenDoors = function(){
    let indexes = [];
    this.state.map(function(el,i){
      if (el === 1) {
        indexes.push(i+1);
      }
    });
    return indexes;
  };

};
