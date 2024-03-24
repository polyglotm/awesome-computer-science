// https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=dynamic-programming

let calculationCount = 0;

function coinChangeRecursiveTopDownWithoutMemo(coins: number[], amount: number): number {
  calculationCount += 1;

  coins.sort((a, b) => a - b);

  if (amount === 0) {
    return 0;
  }

  let result = Infinity;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      result = Math.min(result, 1 + coinChangeRecursiveTopDownWithoutMemo(coins, amount - coins[i]));
    }
  }

  return result;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(coinChangeRecursiveTopDownWithoutMemo(coins, amount)); // 3
console.log(calculationCount); // 12
// NOTE: 527 without memo
