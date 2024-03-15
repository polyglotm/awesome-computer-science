function combinationSum(candidates, target) {
    const result = [];
    const set = new Set();
    const backtrack = (target, path, sum = 0) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            const pathCandidate = [...path];
            pathCandidate.sort((a, b) => a - b);
            if (!set.has(pathCandidate.toString())) {
                result.push(pathCandidate);
                set.add(pathCandidate.toString());
            }
            return;
        }
        if (sum < target) {
            for (let i = 0; i < candidates.length; i += 1) {
                path.push(candidates[i]);
                backtrack(target, path, sum + candidates[i]);
                path.pop();
            }
        }
    };
    backtrack(target, []);
    return result;
}
;
let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
// Output: [[2,2,3],[7]]
