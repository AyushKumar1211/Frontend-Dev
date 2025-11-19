let salary = 30000;
let increment = 10;
let projection = [];

for (let i = 1; i <= 5; i++) {
  salary += salary * (increment / 100);
  projection.push({ Year: i, Salary: Math.round(salary) });
}

console.table(projection);
