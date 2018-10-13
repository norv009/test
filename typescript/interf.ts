interface IAccount{
    withdram(amount:number):void;
    deposite(amount:number):void;
    balance():number;
}

class Account implements IAccount{
    accountBalance:number;

    constructor (balance){
        this.accountBalance=balance;
    }

    withdram(amount:number):void{
        this.accountBalance=this.accountBalance-amount;
    }

    deposite(amount:number):void{
        this.accountBalance=this.accountBalance+amount;
    }

    balance():number{
        return this.accountBalance;
    }
}
var account = new Account(3);
console.log(account.balance());
account.withdram(2);
account.deposite(3);
console.log(account.balance());