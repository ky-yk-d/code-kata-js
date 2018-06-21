'use strict';

exports.Solver = function(){

  this.findSmallestFactor = function(num){
    let possibleLargestFactor = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= possibleLargestFactor; i++){
      if (num % i === 0){
        return i;
      }
    }
    return 0;
  };

  this.factorize = function(num){
    let result = [];
    let temp = num;
    while (true){
      let smallestFactor = this.findSmallestFactor(temp);
      if (smallestFactor === 0 ){
        result.push(temp);
        break;
      } else {
        result.push(smallestFactor);
        temp = temp / smallestFactor;
      }
    }
    return result;
  };
};