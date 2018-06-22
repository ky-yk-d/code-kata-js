// Factorize a positive integer number into its prime factors.

// 	 2 -> [2]
// 	 3 -> [3]
// 	 4 -> [2,2]
// 	 6 -> [2,3]
// 	 9 -> [3,3]
// 	12 -> [2,2,3]
// 	15 -> [3,5]

'use strict';
const assert = require('power-assert');
const PrimeFactors = require('../src/PrimeFactors');

describe('PrimeFactors', () => {

  describe('素因数分解が正しく行われる', () => {

    it ('2のときは2を返す', () => {
      assert(PrimeFactors.factorize(2).toString() === [2].toString());
    });
    
    it ('4のときは[2,2]を返す', () => {
      assert(PrimeFactors.factorize(4).toString() === [2,2].toString());
    });
    
    it ('6のときは[2,3]を返す', () => {
      assert(PrimeFactors.factorize(6).toString() === [2,3].toString());
    }); 

    it ('108のときは[2,2,3,3,3]を返す', () => {
      assert(PrimeFactors.factorize(108).toString() === [2,2,3,3,3].toString());
    });

  });

  describe('最小の約数を返す', () => {

    it ('12を渡すと2を返す', () => {
      assert(PrimeFactors.findSmallestFactor(12) === 2);
    });
    
    it ('17を渡すと0を返す', () => {
      assert(PrimeFactors.findSmallestFactor(17) === 0);
    });

  });
  
});