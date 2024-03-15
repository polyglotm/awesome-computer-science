function permuteUnique(items) {
    const result = [];
    const set = new Set();
    items.length;
    const backtrack = (path) => {
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
}
;
let nums = [1, 1, 2];
console.log(permuteUnique(nums));
// Output: [[1,1,2], [1,2,1], [2,1,1]]
nums = [1, 2, 3];
console.log(permuteUnique(nums));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
