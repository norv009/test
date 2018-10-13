/// <reference path = 'nameSPAACE.ts'/>
var ha = /** @class */ (function () {
    function ha() {
    }
    ha.prototype.withdrawn = function (amount) {
        console.log('thhis is called ');
    };
    ha.prototype.deposite = function (amount) {
        console.log('this is deposite');
    };
    return ha;
}());
var sj = new ha();
console.log(sj.deposite(2));
console.log(sj.withdrawn(3));
