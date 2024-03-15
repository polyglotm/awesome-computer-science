// https://leetcode.com/problems/subsets-ii/description/
function subsetsWithDup(nums) {
    const result = [];
    const sets = new Set();
    const backtrack = (i, path) => {
        if (i === nums.length) {
            const candidate = [...path];
            candidate.sort((a, b) => a - b);
            if (!sets.has(candidate.toString())) {
                result.push(candidate);
                sets.add(candidate.toString());
            }
            return;
        }
        path.push(nums[i]);
        backtrack(i + 1, path);
        path.pop();
        backtrack(i + 1, path);
    };
    backtrack(0, []);
    return result;
}
;
let arr = [4, 4, 4, 1, 4];
console.log(subsetsWithDup(arr));
// [[], [1], [1, 4], [1, 4, 4], [1, 4, 4, 4], [1, 4, 4, 4, 4], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]]
//
//   [
//   [4, 4, 4, 1, 4], [4, 4, 4, 1],
//     [4, 4, 4, 4], [4, 4, 4],
//     [4, 4, 1, 4], [4, 4, 1],
//     [4, 4], [4, 1, 4],
//     [4, 1], [4],
//     [1, 4], [1],
//     []
//   ];
