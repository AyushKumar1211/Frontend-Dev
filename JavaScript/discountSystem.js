let total = 7600;
let discount = total >= 10000 ? 25 : total >= 5000 ? 15 : total >= 2000 ? 5 : 0;
let finalPrice = total - (total * discount) / 100;

console.log("Original Total:", total);
console.log("Discount %:", discount);
console.log("Final Price:", Math.round(finalPrice));
