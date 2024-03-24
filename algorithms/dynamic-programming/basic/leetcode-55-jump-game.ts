// https://leetcode.com/problems/jump-game/
function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }

  const dp = new Array(nums.length).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (dp[i] === true) {
      const endIndex = Math.min(i + 1 + nums[i], nums.length);

      for (let j = i + 1; j < endIndex; j += 1) {
        dp[j] = true;
      }
    }
  }

  return dp[dp.length - 1];
};

let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // true
// Output: true;

nums = [3, 2, 1, 0, 4];
console.log(canJump(nums)); // true
// Output: false;

// Constraints:
//   1 <= nums.length <= 104
// 0 <= nums[i] <= 105
