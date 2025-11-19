let expenses = [5000, 1200, 8000, 2200, 1500];
let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;
let finalAmount = total + total * 0.1;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final After Tax:", finalAmount.toFixed(2));
