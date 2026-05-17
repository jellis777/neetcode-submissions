class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        nums.sort((a,b) => a - b);

        const n = nums.length

        const largestProduct = nums[n - 1] * nums[n - 2]; 
        const smallestProduct = nums[0] * nums[1]; 

        return largestProduct - smallestProduct; 
    }
}
