class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false); 

        function backtrack(path) {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue; 

                // choose
                used[i] = true;
                path.push(nums[i]);

                // explore
                backtrack(path);

                // undo
                path.pop();
                used[i] = false;
            }
        }

        backtrack([]);
        return result; 
    }
}
