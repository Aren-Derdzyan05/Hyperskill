const input = require('sync-input');
console.log("Earned amount:\nBubblegum: $202\nToffee: $118\nIce cream: $2250\nMilk chocolate: $1680\nDoughnut: $1075\nPancake: $80");
const result = 202 + 118 + 2250 + 1680 + 1075 + 80;
console.log("Income: $" + result);
console.log("Staff expenses:");
const staff = Number(input());
console.log('Other expenses:');
const other = Number(input());
const total = result - (other + staff);
console.log('Net income: $' + total);
