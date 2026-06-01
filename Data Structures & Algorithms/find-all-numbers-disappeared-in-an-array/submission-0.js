class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let result = [];

        for (let i = 1; i <= nums.length; i++) {
            if (!nums.includes(i)) {
                result.push(i)
            }
        }

        return result; 
    }
}
/**
 INPUT: []int -> nums
 OUTPUT: []int -> The missing numbers from nums that range from 1 to n (nums.length)
 CONSTRAINTS: 1 <= nums[i] <= nums.length <= 100,000
 EDGE CASES: [1] -> []  No missing integers 
            [1, 3] -> 2

 INITIAL APPROACH: 
        - create a set containing nums
        - Iterate over i = 1 to nums.length
                - If !set.has(i)
                - result.push(i)
        - return result

        Time: O(n)
        Space: O(n)

 OPTIMAL APPROACH:  For better space complexity
        - let result = []
        - Iterate over i = 1; i <= nums.length; i++ 
                - if (!nums.includes(i)) 
                    - THEN result.push(i)
        - return i;
        Time: O(n)
        Space: O(1)


 */