// // Battery.js

// export class Battery {

//     #charge = 0;

//     constructor(deviceName, defaultValue = 0) {
//         this.deviceName = deviceName;
//         this.charge(defaultValue);
//     }

//     get level() {
//         return this.#charge;
//     }

//     use(amount) {
//         if (amount > 0) {
//             this.#charge = Math.max(0, this.#charge - amount);
//         }
//     }

//     charge(amount) {
//         if (amount > 0) {
//             this.#charge = Math.min(100, this.#charge + amount);
//         }
//     }

//     getCard() {
//         return `
//             <h2>${this.deviceName}</h2>
//             <p>${this.deviceName} har ${this.level}% kvar av sitt batteri.</p>
//         `
//     }

//     deviceInfo() {
//         console.log(`${this.deviceName} har ${this.level}% kvar av sitt batteri.`)
//     }
// }