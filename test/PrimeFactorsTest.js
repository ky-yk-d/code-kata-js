'use strict';
const assert = require('power-assert');
const PrimeFactors = require('../src/PrimeFactors');

describe('PrimeFactors', () => {
  let solver = new PrimeFactors.Solver();
  it ('2のときは2を返す', () => {
    assert(solver.factorize(2).toString() === [2].toString());
  });
});