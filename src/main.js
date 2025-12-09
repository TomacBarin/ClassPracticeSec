// main.js

import { Account } from "./modules/Account.js";


const konto1 = new Account("Harald", 2500);
const konto2 = new Account("Hasse minus 4500", -4500);
const konto3 = new Account("Frida utan pengar");

konto1.info();
konto2.info();
konto3.info();