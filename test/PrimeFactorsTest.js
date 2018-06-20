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
});