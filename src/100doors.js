'use strict';

exports.doors = function(){ // ここはアローにするとコンストラクタとして扱ってもらえない
  this.state = Array(100).fill(0);
  this.getState = () => {
    return this.state;
  };
  this.toggleOne = (door) => {
    if (door === 0){
      return 1;
    } else if (door === 1){
      return 0;
    } else {
      throw new Error('illegalArgument');
    }
  };

  this.toggleAll = (num) => {
    if (num < 1) {
      throw new Error('illegalArgument');
    }
    this.state = this.state.map(
      (el, i) => {
        if ((i + 1) % num === 0){
          el = this.toggleOne(el);
        }
        return el; //　トグルした結果を返す（新しい配列の各要素となる）
      } // アローにしたのでthisのバインドが不要になった
    ); 
  };

  this.getIndexesOfOpenDoors = () => {
    let indexes = [];
    this.state.map(
      (el,i) => {
      if (el === 1) {
        indexes.push(i+1);
      }
    });
    return indexes;
  };

};
