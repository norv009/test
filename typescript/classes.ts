class Person{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): string{
        return this.name;
    }


}


var pers = new Person('mridul');
console.log(pers.display());