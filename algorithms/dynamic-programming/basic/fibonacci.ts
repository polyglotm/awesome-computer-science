// NOTE: naive recursive approach
// Time complexity: O(2^n)


let calculationCount = 0;

function fibonacciNaive(n: number): number {
  calculationCount++;

  if (n <= 1) {
    return n;
  }

  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}

console.log(fibonacciNaive(10));
console.log(calculationCount);
// 177

// NOTE: Top down approach

calculationCount = 0;

function fibonacciTopDown(n: number, memo: number[]): number {
  calculationCount++;

  if (n <= 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] = fibonacciTopDown(n - 1, memo) + fibonacciTopDown(n - 2, memo);
  }

  return memo[n];
}

console.log(fibonacciTopDown(10, []));
console.log(calculationCount);
// 19

calculationCount = 0;

function fibonacciBottomUp(n: number): number {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
    calculationCount++;
  }

  return memo[n];
}

console.log(fibonacciBottomUp(10));
console.log(calculationCount);

// 9

calculationCount = 0;

function fibonacciBottomUpWithLinearIteration(
  n: number, iteration: number = 1, previous: number = 1, current: number = 1) {
  calculationCount++;

  if (iteration === n) {
    return current;
  }

  return fibonacciBottomUpWithLinearIteration(
    n, iteration + 1, current, previous + current);
}

console.log(fibonacciBottomUpWithLinearIteration(10));
console.log(calculationCount);
//? 10


// NOTE: Bottom up approach
