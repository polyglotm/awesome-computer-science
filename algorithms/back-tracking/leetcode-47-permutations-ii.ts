// NOTE: permutation with duplicate elements, but only return unique permutations
function permuteUnique(items: number[]): number[][] {
  const result = [];
  const set = new Set();
  items.length;

  const backtrack = (path: number[]) => {
    if (items.length === 0) {
      if (!set.has(path.toString())) {
        result.push([...path]);
        set.add(path.toString());
      }

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

let nums = [1, 1, 2];
console.log(permuteUnique(nums));
let result = [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1]
];

console.log(result);

nums = [1, 2, 3];
console.log(permuteUnique(nums));
result = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
];
