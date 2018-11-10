"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert"); // 公式ガイドに"CAUTION: don't use import 'assert' from 'assert'"とある
var money_1 = require("../src/money");
describe('Moneyクラスのテスト', function () {
    it('Dollarの副作用がない', function () {
        var five = money_1.Money.dollar(5);
        assert.deepStrictEqual(new money_1.Dollar(10), five.times(2));
        assert.deepStrictEqual(new money_1.Dollar(15), five.times(3));
    });
    it('等価性比較', function () {
        assert.deepStrictEqual(new money_1.Dollar(5), new money_1.Dollar(5));
        assert.notDeepStrictEqual(new money_1.Dollar(5), new money_1.Dollar(6)); // 三角測量
        assert.deepStrictEqual(new money_1.Franc(5), new money_1.Franc(5));
        assert.notDeepStrictEqual(new money_1.Franc(5), new money_1.Franc(10));
    });
    it('Francの副作用がない', function () {
        var five = new money_1.Franc(5);
        assert.deepStrictEqual(new money_1.Franc(10), five.times(2));
        assert.deepStrictEqual(new money_1.Franc(15), five.times(3));
    });
    it('MoneyとFrancは異なる', function () {
        assert.notDeepStrictEqual(new money_1.Franc(10), new money_1.Dollar(10));
    });
});
//# sourceMappingURL=money.test.js.map