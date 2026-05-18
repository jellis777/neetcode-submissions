class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = nums[0];
        let maxSum = nums[0]; 

        for (let i = 1; i < nums.length; i++) {
            curr = Math.max(nums[i], curr + nums[i]);
            maxSum = Math.max(maxSum, curr); 
        }

        return maxSum; 
    }
}
