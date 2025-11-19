let a = Math.floor(Math.random() * 20) + 1;
let b = Math.floor(Math.random() * 20) + 1;
let ops = ['+', '-', '*', '/'];
let op = ops[Math.floor(Math.random() * ops.length)];
let answer;

switch (op) {
  case '+': answer = a + b; break;
  case '-': answer = a - b; break;
  case '*': answer = a * b; break;
  case '/': answer = (a / b).toFixed(2); break;
}

console.log(`${a} ${op} ${b} = ${answer}`);
