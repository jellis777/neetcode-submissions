class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l + 1, r + 1];
            } else if (sum > target) {
                r--;
            } else {
                l++;
            }
        }
    }
}

/**
 INPUT: []int -> numbers (SORTED IN ASCENDING ORDER )
        int -> target
 OUTPUT: []int  -> 1-indexed array containing the two differnet indices of numbers that their sum is equal to target
 CONSTRAINTS: 2 <= numbers.length <= 1000
              -1000 <= numbers[i] <= 1000
              -1000 <= target <= 1000
              - exactly one valid solution
              - solution must use O(1) space 
 EDGE CASES: 
              - [1, 2]  target = 3  -> [1, 2]  - smallest length of numbers
              - There's only one valid solution

 INITIAL APPROACH: 
            - Use two pointers because numbers is already sorted in ascending order
            - l= 0;  r = numbers.length - 1;
            - IF sum equals target THEN return [l + 1, r + 1]
            - ELSE IF sum of numbers[l] and numbers[r] > target 
                    - THEN right--
            - ELSE  
                    - left++

            Time: O(n)
            Space: O(1)
 */
