import { Account } from "./modules/Account.js";

const konto1 = new Account("Harald", 2500);
const konto2 = new Account("Hasse", 738);
const konto3 = new Account("Milfred", 3851);
const konto4 = new Account("Frida", -4500);
const konto5 = new Account("Fritz Klyka");

konto1.info();
konto2.info();
konto3.info();
konto4.info();
konto5.info();


