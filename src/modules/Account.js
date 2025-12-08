export class Account {

    #saldo = 0;

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.deposit(balance);
    }

    get balance() {
        return this.#saldo;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#saldo += amount;
        }
    }

    withdraw() {
        if (amount > 0 && this.#saldo - amount >= 0) {
            this.#saldo -= amount;
        }
    }

    info() {
        console.log(`${this.owner} har ${this.balance} kronor på kontot.`)
    }

}