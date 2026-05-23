class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        const even = nums[0] % 2 === 0;

        for (let i = 1; i < nums.length; i++) {
            if (even) {
                if (i % 2 === 0 ) {
                    if (nums[i] % 2 !== 0) {
                        return false; 
                    }
                } else {
                    if (nums[i] % 2 !== 1) {
                        return false; 
                    }
                }
            } else {
                if (i % 2 === 1) {
                    if (nums[i] % 2 !== 1) {
                        return false; 
                    }
                } else {
                    if (nums[i] % 2 !== 0) {
                        return false; 
                    }
                }
            }
        }

        return true; 
    }
}

/**
 CLARIFY: 
    - INPUT: []int
    - OUTPUT: boolean -> every pair has an adjacent even and an odd number
    - CONSTRAINTS: Up to 100 elements
    - EDGE CASES: [] -> true
    
NAIVE SOLUTION: 
            - Iterate  starting at index 1 and check each element IF different than previous element; 
            - IF not FALSE; 

       Time:     O(n)
       Space:    O(1); 


Pattern: Using a for loop and previous index using modulous to detect even or odd

PSEUDO CODE/ PLAN: 
    - Create a variable (even) = nums[0] % 2 === 0 
    - Create for loop starting at index 1; 
    - IF (even) THEN  IF i % 2 === 0  THEN nums[i] % 2 !== 0  RETURN FALSE; 
    - ELSE IF (odd) IF i % 2 === 1 THEN nums[i] % 2 !== 1 RETURN FALSE; 
    - return TRUE; 

    Time: O(n)
    Space: O(1)




 */