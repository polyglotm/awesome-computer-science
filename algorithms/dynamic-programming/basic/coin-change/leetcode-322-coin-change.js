// https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=dynamic-programming
function coinChangeBottomUp(coins, amount) {
    coins.sort((a, b) => a - b);
    const dp = [];
    for (let i = 0; i <= amount; i++) {
        dp[i] = i === 0 ? 0 : Infinity;
    }
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    if (dp[amount] === Infinity) {
        return -1;
    }
    return dp[amount];
}
;
