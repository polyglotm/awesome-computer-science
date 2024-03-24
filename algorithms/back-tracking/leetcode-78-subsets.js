// https://leetcode.com/problems/subsets/
// NOTE: subsets without duplicate element
function subsets(nums) {
    const result = [];
    const backtrack = (i, path) => {
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
}
;
const arr = [1, 2, 3];
console.log(subsets(arr));
const result = [
    [1, 2, 3],
    [1, 2],
    [1, 3],
    [1],
    [2, 3],
    [2],
    [3],
    []
];
