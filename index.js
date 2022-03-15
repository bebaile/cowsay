const myObject = require('./information.js');
const cowSay = require("cowsay");
console.log(cowSay.say({text: `Hello, I am ${myObject.objet.username} from ${myObject.objet.campus}`, e: 'oO', T: "U"}));