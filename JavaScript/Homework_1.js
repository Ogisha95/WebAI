let phonePrice = 119.95;
let numberOfPhones = 30;
let taxRate = 0.05;

let subtotal = phonePrice * numberOfPhones;

let tax = subtotal * taxRate;

let total = subtotal + tax;

console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax: $" + tax.toFixed(2));
console.log("Total price: $" + total.toFixed(2));