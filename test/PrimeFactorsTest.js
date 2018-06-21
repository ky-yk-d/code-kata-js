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
  let solver = new PrimeFactors.Solver();
  it ('2のときは2を返す', () => {
    assert(solver.factorize(2).toString() === [2].toString());
  });
  it ('4のときは[2,2]を返す', () => {
    let solver = new PrimeFactors.Solver();
    assert(solver.factorize(4).toString() === [2,2].toString());
  });
  it ('6のときは[2,3]を返す', () => {
    let solver = new PrimeFactors.Solver();
    assert(solver.factorize(6).toString() === [2,3].toString());
  }); 
  it ('108のときは[2,2,3,3,3]を返す', () => {
    let solver = new PrimeFactors.Solver();
    assert(solver.factorize(108).toString() === [2,2,3,3,3].toString());
  });
  describe('最小の約数を探す', () => {
    it ('12を渡すと2を返す', () => {
      let solver = new PrimeFactors.Solver();
      assert(solver.findSmallestFactor(12) === 2);
    });
    it ('17を渡すと0を返す', () => {
      let solver = new PrimeFactors.Solver();
      assert(solver.findSmallestFactor(17) === 0);
    });
  });
});