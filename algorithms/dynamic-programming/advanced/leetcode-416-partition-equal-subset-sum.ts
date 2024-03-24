// https://leetcode.com/problems/partition-equal-subset-sum/

function canPartition(nums: number[]): boolean {
  if (nums.length < 2) {
    return false;
  }

  nums.sort((a, b) => a - b);

  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const half = sum / 2;

  if (half % 1 !== 0) {
    return false;
  }

  const dp = new Array(nums.length);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(half + 1).fill(false);
  }

  dp[0][nums[0]] = true;

  for (let row = 1; row < nums.length; row++) {
    for (let column = 0; column <= half; column++) {
      const prevValue = dp[row - 1][column];
      const isPrevTrue = !!dp[row - 1][column - nums[row]];
      dp[row][column] = isPrevTrue || prevValue;
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

// let nums = [3, 3, 3, 4, 5];
let nums = [23, 13, 11, 7, 6, 5, 5];
// nums = [2, 2, 1, 1];
console.log(canPartition(nums));
//
// nums = [1, 5, 11, 5];
// console.log(canPartition(nums));
// // // Output: true
// nums = [1, 2, 3, 5];
// console.log(canPartition(nums));
// // // Output: false
// //
// nums = [1, 2, 5];
// console.log(canPartition(nums));
