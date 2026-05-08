class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = 0; 

        for (let i = 0; i < nums.length; i++) {
            if (farthest < i) return false; 

            farthest = Math.max(farthest, i + nums[i]); 

            if (farthest >= nums.length - 1) {
                return true; 
            }
        }
    }
}
