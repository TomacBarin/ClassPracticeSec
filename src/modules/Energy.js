export class Energy {
    #level = 0

    constructor(name, startValue = 0) {
        this.name = name;
        this.consume(startValue);
    }

    get level() {
        return this.#level;
    }

    consume(amount) {
        if (amount > 0) {
            this.#level = Math.max(0, this.#level - amount);
        }
    }

    recharge(amount) {
        if (amount > 0) {
            this.#level = Math.min(100, this.#level + amount);
        }
    }


    render() {
        return `
            <h2>${this.name}</h2>
            <p>${this.name} har ${this.startValue}% kvar av sitt batteri.</p>
        `
    }

    info() {
        console.log(`${this.name} har ${this.level}% kvar av sitt batteri.`)
    }

}