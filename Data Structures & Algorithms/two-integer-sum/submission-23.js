class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (numToIndex.has(diff)) {
                return [numToIndex.get(diff), i];
            }

            numToIndex.set(nums[i], i)
        }
    }
}
/**
 INPUT: []int -> nums
        int -> target
 OUTPUT: []int   ->  Two unique indexes of two elements that sum up to target
 CONSTRAINTS: 2 <= nums.length <= 1000 
             -10,000,000 <= nums[i] <= 10,000,000
             -10,000,000 <= target <= 10,000,000
             - Only one valid answer exists
 EDGE CASES: nums = [3, 1, 3, 4, 5] target = 6   Can have duplicates -> [0, 2]
                    [3, 5] target = 8  Min amount of elements  -> [0, 1]

 INITIAL APPROACH: 
            - use Map to collect number = index
            - Iterate through nums 
                - Find the difference of the target and nums[i] 
                - Seach Map for difference and its index
                        - IF found then return [map.get(difference), i]
                - Add to Map the current num and its index

            Time: O(n)
            Space: O(n)

 */
