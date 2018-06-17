var assert = require('power-assert');
var module = require('../src/game');

describe('bowling game', function(){

    var game;
    
    var rollMany = function(n, pins){
        for (i=0; i < n; i++){
            game.roll(pins);
        }
    };

    var rollSpare = function(){
        game.roll(5);
        game.roll(5);
    };

    var rollStrike = function(){
        game.roll(10);
    };

    beforeEach(function(){
        game = new module.game();
    });

    it ("全部ガーターなら0点", function() {
        rollMany(20, 0);
        assert(game.score() === 0 );
    });
    
    it ("全部1なら20点", function(){
        rollMany(20, 1);
        assert(game.score() === 20);
    });
        
    it ("スペアがあった場合は得点が加算される", function(){
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        assert(game.score() === 16);
    });

    it ("ストライクがあった場合は得点が加算される", function(){
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(17, 0);
        assert(game.score() === 24);
    });

    it("パーフェクトゲームは300点", function(){
        rollMany(12, 10);
        assert(game.score() === 300);
    });
});
