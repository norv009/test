var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        return this.name;
    };
    return Person;
}());
var pers = new Person('mridul');
console.log(pers.display());
