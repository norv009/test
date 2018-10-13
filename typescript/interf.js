var Account = /** @class */ (function () {
    function Account(balance) {
        this.accountBalance = balance;
    }
    Account.prototype.withdram = function (amount) {
        this.accountBalance = this.accountBalance - amount;
    };
    Account.prototype.deposite = function (amount) {
        this.accountBalance = this.accountBalance + amount;
    };
    Account.prototype.balance = function () {
        return this.accountBalance;
    };
    return Account;
}());
var account = new Account(3);
console.log(account.balance());
account.withdram(2);
account.deposite(3);
console.log(account.balance());
