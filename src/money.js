"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Money = /** @class */ (function () {
    function Money(amount) {
        this.amount = amount;
    }
    Money.dollar = function (amount) {
        return new Dollar(amount);
    };
    return Money;
}());
exports.Money = Money;
var Dollar = /** @class */ (function (_super) {
    __extends(Dollar, _super);
    function Dollar(amount) {
        return _super.call(this, amount) || this;
    }
    Dollar.prototype.times = function (multiplier) {
        return new Dollar(this.amount * multiplier);
    };
    return Dollar;
}(Money));
exports.Dollar = Dollar;
var Franc = /** @class */ (function (_super) {
    __extends(Franc, _super);
    function Franc(amount) {
        return _super.call(this, amount) || this;
    }
    Franc.prototype.times = function (multiplier) {
        return new Franc(this.amount * multiplier);
    };
    return Franc;
}(Money));
exports.Franc = Franc;
//# sourceMappingURL=money.js.map