'use strict';

const assert = require('power-assert');
const hundredDoorsSolver = require('../src/100doors');

describe('100 doors', function(){
  it ("初期状態はすべて0（しまっている）", function(){
    let doors = new hundredDoorsSolver.doors();
    assert(doors.getState().toString() === Array(100).fill(0).toString());
  });

  it ("1回トグルするとすべて1", function(){
    let doors = new hundredDoorsSolver.doors();
    doors.toggleAll(1);
    assert(doors.getState().toString() === Array(100).fill(1).toString());
  });

  it ("1つのドアをトグルする関数に0,1以外を渡すとエラー", () => {
    let doors = new hundredDoorsSolver.doors();
    assert.throws(
      () => {
        doors.toggleOne(2);
      },
      (error) => {
        assert(error.message === 'illegalArgument');
        return true;
      }
  )});
});