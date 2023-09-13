function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
// Example usage
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat(num1, " + ").concat(num2, " = ").concat(add(num1, num2)));
console.log("Subtraction: ".concat(num1, " - ").concat(num2, " = ").concat(subtract(num1, num2)));
console.log("Multiplication: ".concat(num1, " * ").concat(num2, " = ").concat(multiply(num1, num2)));
console.log("Division: ".concat(num1, " / ").concat(num2, " = ").concat(divide(num1, num2)));
