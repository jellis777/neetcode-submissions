class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        function backtrack(start, path) {
            // save current subset
            result.push([...path]); 

            for (let i = start; i < nums.length; i++) {
                // choose
                path.push(nums[i]);

                // explore
                backtrack(i + 1, path); 

                // undo(backtrack)
                path.pop();
            }
        }

        backtrack(0, []);
        return result; 
    }
}
