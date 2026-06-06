class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const count = {}; 
        const result = []; 
        const threshold = nums.length / 3

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1; 
        }

        for (let key in count) {
            if (count[key] > threshold) {
                result.push(Number(key))
            }
        }
        return result; 
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: []int  ->  contains numbers that appear more than n/3 times

 CONSTRAINTS: 1 <= nums.length <= 50,000
 -1,000,000,000 <= nums[i] <= 1,000,000,000 
 - Linear time O(n) complexity
 - O(1) space complexity

 EDGE CASES: - Input: nums = [1,2,3]     Each element only occurs once, but not MORE than n/3
                Output: []       

             - [-3, 3, 2, 3]   Output:[3]   Positives and negatives

 INITIAL APPROACH: - O(n) space   by using a hashMap for the frequency of each num

 PLAN: 
        - count {}
        - Iterate over nums and insert count of each num
        - Iterate over each key of the hashmap  and see if count is greater than threshold
            -IF so then push into result; 
        - return result; 



 */
