class Father{
    prop:number;

    constructor (prop:number){
        this.prop = prop;
    }

    display():string{
        return `father property is ${this.prop}`;
    }
}

class son extends Father{
    name:string;

    constructor (name:string,num:number){
        super(num);
        this.name=name
    }

    display():string{
        super.display()
        return `this is the child of father ${this.name} and had proerty of  ${this.prop}`
    }
}

var sony = new son('shu',2);
console.log(sony.display());