function a(){
    var k=2;

    return function b(){
        let b=3;
        
        return function c():number{
            let d=k+b;
            return d;
        }
    }
}

var k = a();
console.log(k());