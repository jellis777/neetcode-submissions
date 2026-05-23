class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        const seen = new Set();
        const result = [-1, -1];

        for (let num of nums) {
            if (seen.has(num)) {
                result[0] = num;
            }

            seen.add(num);
        }

        for (let i = 1; i <= nums.length; i++) {
            if (!seen.has(i)) {
                result[1] = i;
                return result;
            }
        }
    }
}

/**
 CLARIFY:
    Input: []int -> nums
    Output: []int -> [duplicate num, missing num]; 
    Constraints: - one missing number and one duplicate

  NAIVE SOLUTION: 
        - seen = Set(); 
        - Loop through nums and set.add(nums[i]);
        - if seen has nums[i], push to result; 
        - Loop through nums and check if set !has nums[i] + 1 
            - if nums[i] === nums.length -> continue; 
            - push to result nums[i] + 1

    Time: O(n)
    Space: O(n)

    PSEUDO CODE:
        - const seen = new Set();
        - 
 */
