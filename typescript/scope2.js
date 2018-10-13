var scopeTest = /** @class */ (function () {
    function scopeTest() {
    }
    scopeTest.prototype.testFunction1 = function () {
        var a = 10;
        if (10) {
            var a = 10;
        }
        console.log(a);
    };
    scopeTest.prototype.testFunction2 = function () {
        var a = 10;
        if (10) {
            var a = 10;
        }
        console.log(a);
    };
    scopeTest.prototype.testFunction3 = function () {
        var ar = [];
        for (var index = 0; index < 10; index++) {
            ar.push(function () {
                console.log(index);
            });
        }
        ar.forEach(function (element) {
            element();
        });
    };
    scopeTest.prototype.testFunction4 = function () {
        var ar = [];
        for (var index = 0; index < 10; index++) {
            var kc = function (index) {
                return function () {
                    console.log(index);
                };
            };
            ar.push(kc(index));
        }
        ar.forEach(function (element) {
            element();
        });
    };
    return scopeTest;
}());
var apple = new scopeTest();
console.log(apple.testFunction4());
