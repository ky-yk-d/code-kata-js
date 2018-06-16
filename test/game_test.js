var assert = require('power-assert');
var module = require('../src/game');

describe('bowling game', function(){

    it ("全部ガーターなら0点", function() {
        var game = new module.game();
        for (i=0; i < 20; i++){
            console.log(i+ '回目');
            game.roll(0);
        }
        assert(game.score() === 0 );
    });

});
