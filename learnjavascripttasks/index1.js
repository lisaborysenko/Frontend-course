function add(num1, num2) {
  return (num1 + num2).toFixed(1);
}

console.log(add(6, 2));

function multiply(num1, num2) {
  return (num1 * num2).toFixed(1);
}
console.log(multiply(3, 4));

function division(num1, num2) {
  return (num1 / num2).toFixed(1);
}
console.log(division(12, 2));

function subtract(num1, num2) {
  return (num1 - num2).toFixed(1);
}
console.log(subtract(3, 1));

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
