class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let maxLength = 1;
        let length = 1;

        // strictly increasing
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                length++;
            } else {
                length = 1;
            }

            maxLength = Math.max(maxLength, length);
        }

        length = 1;  // reset

        // strictly decreasing
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                length++;
            } else {
                length = 1;
            }

            maxLength = Math.max(maxLength, length);
        }

        return maxLength; 
    }
}

/**
 INPUT: []int -> nums
 OUTPUT: int  ->  length of the LONGEST subarray of nums (either strictly increasing or decreasing)

 CONSTRAINTS:    1 <= nums.length <= 50;
                 1 <= nums[i] <= 50;  

 EDGE CASES:   - [1]     ->  1
               - [1, 1, 4, 5, 6]  -> 4

 INITIAL APPROACH:  - maxLength = 0
                    - length = 1
                    - Iterate at i = 1 < nums.length 
                            If nums[i] >  nums[i - 1] 
                                    - THEN  length++
                            OTHERWISE:  length = 1; 
                    - Iterate at i = 1 < nums.length 
                            If nums[i] <  nums[i - 1] 
                                    - THEN  length++
                            OTHERWISE:  length = 1; 
                     - maxLength = Math.max(maxLength, length); 

                     return maxLength;

                Time: O(n); 
                Space: O(1)
 */
