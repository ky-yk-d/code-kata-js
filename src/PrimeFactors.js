'use strict';

let isDivisor = (dividend, divisor) => {
  return dividend % divisor === 0;
}

exports.findSmallestFactor = function(num){
    let possibleLargestFactor = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= possibleLargestFactor; i++){
      if (isDivisor(num, i)){
        return i;
      }
    }
    return 0;
  };

 exports.factorize = function(num){
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