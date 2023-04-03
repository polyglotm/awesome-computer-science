function fibonacciBasic(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
  return fibonacciBasic(n - 1) + fibonacciBasic(n - 2);
}

console.log(fibonacciBasic(4));
// 3
console.log(fibonacciBasic(5));
// 5
console.log(fibonacciBasic(7));
// 13
console.log(fibonacciBasic(9));

const phi = (1 + Math.sqrt(5)) / 2;
const fibonacci = (n) => Math.round((phi ** n) / Math.sqrt(5));

console.log(fibonacci(9)); //

