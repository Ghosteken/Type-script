import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSum(a: number, b: number): number {
  return a + b;
}

function calculateProduct(a: number, b: number): number {
  return a * b;
}

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    console.log(`Sum: ${calculateSum(num1, num2)}`);
    console.log(`Product: ${calculateProduct(num1, num2)}`);

    rl.close();
  });
});
