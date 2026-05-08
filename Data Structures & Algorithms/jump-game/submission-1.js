class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > farthest) return false; 

            farthest = Math.max(farthest, nums[i] + i); 

            if (farthest >= nums.length - 1) {
                return true; 
            }
        }
    }
}
