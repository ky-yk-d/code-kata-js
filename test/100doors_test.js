// 100 doors in a row are all initially closed. You make
// 100 passes by the doors. The first time through, you
// visit every door and toggle the door (if the door is
// closed, you open it; if it is open, you close it).
// The second time you only visit every 2nd door (door
// #2, #4, #6, ...). The third time, every 3rd door
// (door #3, #6, #9, ...), etc, until you only visit
// the 100th door.

// Question: What state are the doors in after the last
// pass? Which are open, which are closed?

'use strict';

const assert = require('power-assert');
const hundredDoorsSolver = require('../src/100doors');

describe('100 doors', () => {

  let doors;
  let intarray;

  beforeEach(()=>{
    doors = new hundredDoorsSolver.doors();
    intarray = [];
  })

  it ("初期状態はすべて0（しまっている）", () => {
    assert(doors.getState().toString() === Array(100).fill(0).toString());
  });

  it ("1回目のトグルを実行するとすべて1", () => {
    doors.toggleAll(1);
    assert(doors.getState().toString() === Array(100).fill(1).toString());
  });

  it ("初期状態に2回目のトグルを実行すると2の倍数番目のみ1", () => {
    doors.toggleAll(2);
    // [2,4,6,...,100]の配列を作る 
    [...Array(50)].map((_,i)=>{
      intarray.push((i+1)*2);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString()); 
  });
  
  it ("初期状態に3回目のトグルを実行すると3の倍数番目のみ1", () => {
    doors.toggleAll(3);
    // [3, 6, 9,...,99]の配列を作る 
    [...Array(33)].map((_,i)=>{
      intarray.push((i+1)*3);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString()); 
  });

  it ("初期状態から1~100回目のトグルを実行すると平方数番目のみ1", function(){
    [...Array(100)].map((_, i)=>{
      doors.toggleAll(i+1);
    });
    // [1,4,9,16,...,100]の配列を作る
    [...Array(10)].map((_,i)=>{
      intarray.push((i+1)*(i+1));
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString());
  })

  it ("初期状態に対して判定を実行すると空の配列が返される", () => {
    assert(doors.getIndexesOfOpenDoors().length === 0);
  });

  it ("1回目のトグル実行後に対して判定を実行すると1〜100までの配列が返される", function(){
    doors.toggleAll(1);
    // [1,2,3,...,100]の配列を作る
    [...Array(100)].map((_,i)=>{
      intarray.push(i+1);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString());
  });

  it ("1つのドアをトグルする関数に0,1以外を渡すとエラー", () => {
    assert.throws(
      () => {
        doors.toggleOne(2);
      },
      (error) => {
        assert(error.message === 'illegalArgument');
        return true;
      }
    );
  });

  it("toggleAll関数に0を渡すとエラー発生", () => {
    assert.throws(
      () => {
        doors.toggleAll(0);
      },
      (error) => {
        assert(error.message === 'illegalArgument');
        return true;
      }
    );
  });
});