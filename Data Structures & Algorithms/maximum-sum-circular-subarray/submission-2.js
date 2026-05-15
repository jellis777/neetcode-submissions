class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let total = 0;

        let currMax = 0;
        let maxSum = nums[0]; 

        let currMin = 0;
        let minSum = nums[0];

        for (const num of nums) {
            total += num; 

            currMax = Math.max(num, currMax + num); 
            maxSum = Math.max(currMax, maxSum)

            currMin = Math.min(num, currMin + num); 
            minSum = Math.min(currMin, minSum);
        }

        if (maxSum < 0) return maxSum; 

        return Math.max(maxSum, total - minSum); 
    }
}
