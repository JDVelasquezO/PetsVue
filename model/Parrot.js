var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pet } from "./Pet.js";
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot(name, size, age, weigth, featherColor) {
        var _this = _super.call(this, name, size, age, weigth, "Loro") || this;
        _this._featherColor = featherColor;
        return _this;
    }
    Object.defineProperty(Parrot.prototype, "setFeatherColor", {
        set: function (v) {
            this._featherColor = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "getFeatherColor", {
        get: function () {
            return this._featherColor;
        },
        enumerable: true,
        configurable: true
    });
    return Parrot;
}(Pet));
export { Parrot };
