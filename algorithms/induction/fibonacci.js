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

