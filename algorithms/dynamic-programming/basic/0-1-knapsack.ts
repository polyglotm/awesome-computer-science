/*
weight  5,  3,   2,  1
value   60, 50, 70, 30

max weight: 5
 */

function knapsack(items: any, maxWeight: number) {
  const dp = new Array(items.length);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(maxWeight + 1).fill(0);
  }

  for (let j = 1; j < dp[0].length; j++) {
    if (j >= items[0].weight) {
      dp[0][j] = items[0].value;
    }
  }

  for (let row = 1; row < dp.length; row++) {
    row;
    for (let column = 1; column < dp[0].length; column++) {
      column;
      items[row].weight;
      //?
      if (column >= items[row].weight) {
        const { value, weight } = items[row];
        dp[row][column] = Math.max(value + dp[row - 1][column - weight], dp[row - 1][column]);
      } else {
        dp[row][column] = dp[row - 1][column];
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
}

const arr = [
  { weight: 5, value: 60 },
  { weight: 3, value: 50 },
  { weight: 2, value: 70 },
  { weight: 1, value: 30 },
];
let maxWeight = 5;

console.log(knapsack(arr, maxWeight));
