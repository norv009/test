import Cus = require('./nameSPAACE')
// <reference path = 'nameSPAACE.ts'/>

class ha implements Cus.IAccount{

    withdrawn(amount:number):void{
        console.log('thhis is called ');
    }

    deposite(amount:number):void{
        console.log('this is deposite');
    }
}

var sj = new ha();
console.log(sj.deposite(2));
console.log(sj.withdrawn(3));