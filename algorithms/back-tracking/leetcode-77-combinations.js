function combine(n, k) {
    const result = [];
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i + 1);
    }
    const backtrack = (startIndex, path) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = startIndex; i < nums.length; i += 1) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return result;
}
;
console.log(combine(4, 2));
