export class Account {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.startBalance = balance
    }

    info() {
        console.log(`${this.owner} har ${this.startBalance} på kontot.`)
    }
}