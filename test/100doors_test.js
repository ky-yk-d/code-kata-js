'use strict';

const assert = require('power-assert');
const hundredDoorsSolver = require('../src/100doors');

describe('100 doors', function(){
  it ("初期状態はすべて0（しまっている）", function(){
    let doors = new hundredDoorsSolver.doors();
    assert(doors.getState().toString() === Array(100).fill(0).toString());
  });

  it ("1回目のトグルを実行するとすべて1", function(){
    let doors = new hundredDoorsSolver.doors();
    doors.toggleAll(1);
    assert(doors.getState().toString() === Array(100).fill(1).toString());
  });

  it ("初期状態に2回目のトグルを実行すると2の倍数番目のみ1", function(){
    let doors = new hundredDoorsSolver.doors();
    doors.toggleAll(2);
    let intarray = [];
    // 2, 4, 6,...,100の配列を作る 
    [...Array(50)].map((_,i)=>{
      intarray.push((i+1)*2);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString()); 
  });
  
  it ("初期状態に3回目のトグルを実行すると3の倍数番目のみ1", function(){
    let doors = new hundredDoorsSolver.doors();
    doors.toggleAll(3);
    let intarray = [];
    // 3, 6, 9,...,99の配列を作る 
    [...Array(33)].map((_,i)=>{
      intarray.push((i+1)*3);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString()); 
  });

  it ("初期状態に対して判定を実行すると空の配列が返される", function(){
    let doors = new hundredDoorsSolver.doors();
    assert(doors.getIndexesOfOpenDoors().length === 0);
  });

  it ("1回目のトグル実行後に対して判定を実行すると1〜100までの配列が返される", function(){
    let doors = new hundredDoorsSolver.doors();
    doors.toggleAll(1);
    let intarray = [];
    [...Array(100)].map((_,i)=>{
      intarray.push(i+1);
    });
    assert(doors.getIndexesOfOpenDoors().toString() === intarray.toString());
  })

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
  );});
});