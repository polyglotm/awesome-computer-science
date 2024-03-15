// https://leetcode.com/problems/subsets/

function subsets(nums: number[]): number[][] {
  const result = [];

  const backtrack = (i: number, path: number[]) => {
    if (i === nums.length) {
      const candidate = [...path];
      result.push(candidate);
      return;
    }

    path.push(nums[i]);
    backtrack(i + 1, path);
    path.pop();

    backtrack(i + 1, path);
  };

  backtrack(0, []);

  return result;
};

let arr = [1, 2, 3];
console.log(subsets(arr));
