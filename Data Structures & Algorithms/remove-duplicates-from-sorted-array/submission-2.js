class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // INPUT: []int -> nums
    // OUTPUT: []int -> nums (w/o duplicates (in -place));
    // PATTERN: Set();
    // TOOLS: Iterate nums; Check w/ Set;

    //     Example 1:
    // Input: nums = [1,1,2,3,4]
    // Output: [1,2,3,4]
    removeDuplicates(nums) {
        let k = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k; 
    }
}
