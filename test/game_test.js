var assert = require('power-assert');
var module = require('../src/game');

describe('bowling game', function(){

    var game;
    
    var rollMany = function(n, pins){
        for (i=0; i < n; i++){
            game.roll(pins);
        }
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
        
    // it ("スペアがあった場合は得点が加算される", function(){
    //     game.roll(5);
    //     game.roll(5);
    //     game.roll(3);
    //     rollMany(17, 0);
    //     assert(game.score() === 16);
    // });
});
