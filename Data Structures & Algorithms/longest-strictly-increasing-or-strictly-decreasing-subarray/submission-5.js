class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let maxLength = 1;
        let decLength = 1;
        let incLength = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                incLength++;
                decLength = 1;
            } else if (nums[i] < nums[i - 1]) {
                decLength++;
                incLength = 1;
            } else {
                incLength = 1;
                decLength = 1;
            }

            maxLength = Math.max(maxLength, decLength, incLength);
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
