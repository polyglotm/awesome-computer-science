// https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=dynamic-programming

const memo = {};
let calculationCount = 0;

function coinChangeRecursiveTopDown(coins: number[], amount: number): number {
  if (amount in memo) {
    return memo[amount];
  }

  calculationCount += 1;

  coins.sort((a, b) => a - b);

  if (amount === 0) {
    return 0;
  }
  amount;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      memo[amount] = 1 + coinChangeRecursiveTopDown(coins, amount - coins[i]);
    }
  }
  memo;

  return memo[amount];
};

const coins = [1, 2, 5];
const amount = 11;
console.log(coinChangeRecursiveTopDown(coins, amount)); // 3
console.log(calculationCount); // 14
// NOTE: 14 with memo
