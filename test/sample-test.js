'use strict';
const assert = require('power-assert');
const myModule = require('../src/sample');

describe('サンプルテスト', () => {
  it.skip('落ちるテスト', () => {
    let expected = Array(5).fill(3);
    assert(myModule.getActual()[1]=== expected[1]);
  });
});