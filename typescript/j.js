function Person(age) {
    this.age = age;
    this.growOld = function() {
        this.age++;
    }
}

var Person = new Person(1);
setTimeout(Person.growOld,1000);

setTimeout(function() { console.log(Person.bind(age)); },2000); // 1, should have been 2
