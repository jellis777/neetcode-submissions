class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function backtrack(start, path, sum) {
            if (sum === target) {
                result.push([...path]);
                return;
            }

            if (sum > target) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);

                // i, not i + 1, because we can reuse the same number
                backtrack(i, path, sum + nums[i]);

                path.pop();
            }
        }
        backtrack(0, [], 0);
        return result;
    }
}
