var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father(prop) {
        this.prop = prop;
    }
    Father.prototype.display = function () {
        return "father property is " + this.prop;
    };
    return Father;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(name, num) {
        var _this = _super.call(this, num) || this;
        _this.name = name;
        return _this;
    }
    son.prototype.display = function () {
        _super.prototype.display.call(this);
        return "this is the child of father " + this.name + " and had proerty of  " + this.prop;
    };
    return son;
}(Father));
var sony = new son('shu', 2);
console.log(sony.display());
