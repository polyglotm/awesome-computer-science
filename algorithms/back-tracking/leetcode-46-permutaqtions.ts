// https://leetcode.com/problems/permutations/description/

function permute(items: number[]): number[][] {
  const result = [];

  const backtrack = (path: number[]) => {
    if (items.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < items.length; i += 1) {
      path.push(items.shift());
      backtrack(path);
      items.push(path.pop());
    }
  };

  backtrack([]);

  return result;
};

const nums = [1, 2, 3];
console.log(permute(nums));

const result = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 3, 1],
  [2, 1, 3],
  [3, 1, 2],
  [3, 2, 1]
];

