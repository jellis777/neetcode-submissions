class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = nums.reduce((sum, n) => sum + n)
        let left = 0;

        for (let i = 0; i < nums.length; i++) {
            let right = total - left - nums[i]; 

            if (left === right) {
                return i
            }

            left += nums[i];
        }

        return -1; 
    }
}
