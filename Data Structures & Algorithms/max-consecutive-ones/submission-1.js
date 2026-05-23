class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currCount++;
            } else {
                currCount = 0; 
            }

            maxCount = Math.max(maxCount, currCount); 
        }

        return maxCount; 
    }
}

/**
 
 Input: nums = [1,1,0,1,1,1]    3     max = 3

Output: 3
 
       CLARIFY:
            INPUT: []int -> nums
            OUTPUT: int -> maximum number of consecutive 1's 
            CONSTRAINTS: - Optimal solution
            EDGE CASES:  - []  -> 0
                        - [0, 0, 0, 0] -> 0
            
        NAIVE SOLUTION: 
                - maxCount = 0
                - currCount variable = 0; 
                - For Loop over nums
                - Increase currCount when element === 1;
                - maxCount = Math.max(maxCount, currCount)
                - IF nums[i] === 0 -> currCount = 0; 
                - Return currCount; 

        PATTERN: For loop and maxCount and a current currCount; 

        PSEUDO CODE/PLAN:
            - create maxCount = 0
            - for loop over nums
            - create currCount = 0; 
            - Increment currCount when nums[i] === 1;
            - maxCount = Math.max(maxCount, currCount)
             - IF nums[i] === 0 -> currCount = 0; 
            - Return currCount;

            Time: O(n)
            Space: O(1)
 */
