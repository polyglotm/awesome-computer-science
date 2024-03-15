// https://leetcode.com/problems/permutations/description/
function permute(items) {
    const result = [];
    const backtrack = (path) => {
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
}
;
let nums = [1, 2, 3];
console.log(permute(nums));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]