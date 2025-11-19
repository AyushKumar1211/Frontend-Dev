let str = "Hello";
let num = 25;
let bool = true;
let arr = [1, 2, 3];
let obj = { a: 10 };
let n = null;
let u;

console.table({
  string: { value: str, type: typeof str },
  number: { value: num, type: typeof num },
  boolean: { value: bool, type: typeof bool },
  array: { value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  object: { value: obj, type: typeof obj },
  null: { value: n, type: typeof n },
  undefined: { value: u, type: typeof u }
});
