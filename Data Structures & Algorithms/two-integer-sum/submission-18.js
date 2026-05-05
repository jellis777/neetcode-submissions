class Solution {
    /**
     I/O: 
    @param {number[]} nums
    @param {number} target
    @return {number[]} -> including indices that sum up to the target

    diff = target - nums[i]; 
    []

    
    - 
     Example 1:
Input: 
nums = [3,4,5,6], target = 7
Output: [0,1]
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }

        return []; 
    }
}
