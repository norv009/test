function a() {
    var k = 2;
    return function b() {
        var b = 3;
        return function c() {
            var d = k + b;
            return d;
        };
    };
}
var k = a();
console.log(k());
