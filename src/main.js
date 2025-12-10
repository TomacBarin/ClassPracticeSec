import { Energy } from "./modules/Energy.js";

const batteryHtml = document.querySelector("#batteries");

const energy1 = new Energy("iPad", 77);

energy1.info()