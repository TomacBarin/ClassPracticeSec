// main.js

// import { Account } from "./modules/Account.js";


// const konto1 = new Account("Harald", 2500);
// const konto2 = new Account("Hasse minus 4500", -4500);
// const konto3 = new Account("Frida utan pengar");

// konto1.info();
// konto2.info();
// konto3.info();

import { Battery } from "./modules/Battery.js";

const batteryHtml = document.querySelector("#batteries");

const device1 = new Battery("Iphone", 57);
const device2 = new Battery("Nintendo Switch 2", 83);
const device3 = new Battery("iPad", 32);

const allDevices = [device1, device2, device3]

device1.deviceInfo()
device2.deviceInfo()
device3.deviceInfo()

device1.use(80)
device1.deviceInfo()
device2.charge(50)
device2.deviceInfo()

const showBattery = (battery) => {
   const card = document.createElement("div");
   card.classList.add("battery");
   card.innerHTML = battery.getCard();

  card.addEventListener("click", () => {
      battery.use(15); 
      card.innerHTML = battery.getCard();       
    
  });

   batteryHtml.appendChild(card);

}

allDevices.forEach(showBattery)