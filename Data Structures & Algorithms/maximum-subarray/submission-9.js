class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let currSum = 0;

            for (let j = i; j < nums.length; j++) {
                currSum += nums[j];
                maxSum = Math.max(maxSum, currSum)
            }
        }

        return maxSum; 
    }
}
