export class Account {
    #saldo = 0

    constructor(owner, balance = 0) {
        this.owner = owner;
        // this.startBalance = balance;
        this.deposit(balance);
    }

    get balance() {
        return this.#saldo;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#saldo += amount;
            console.log(`${this.owner} har satt in ${amount} på kontot.`)
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#saldo - amount >= 0) {
            this.#saldo -= amount;
            console.log(`${this.owner} har tagit ut ${amount} på kontot.`)
        }
    }

    info() {
        console.log(`${this.owner} har ${this.balance} på kontot.`)
    }
}