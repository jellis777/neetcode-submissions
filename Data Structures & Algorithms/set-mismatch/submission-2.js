class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        const duplicates = new Set();
        const result = [-1, -1];
        const min = Math.min(...nums);
        const max = Math.max(...nums);

        for (let i = 0; i < nums.length; i++) {
            if (duplicates.has(nums[i])) {
                result[0] = nums[i];
            } else {
                duplicates.add(nums[i]);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            // if (nums[i] === nums.length) continue
            if (duplicates.has(nums.length)) {
                if (!duplicates.has(nums[i] - 1) && nums[i] !== 1) {
                    result[1] = nums[i] - 1;
                    return result;
                }
            } else {
                if (!duplicates.has(nums[i] + 1)) {
                    result[1] = nums[i] + 1;
                    return result; 
                }
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
        - duplicates = Set(); 
        - Loop through nums and set.add(nums[i]);
        - if duplicates has nums[i], push to result; 
        - Loop through nums and check if set !has nums[i] + 1 
            - if nums[i] === nums.length -> continue; 
            - push to result nums[i] + 1

    Time: O(n)
    Space: O(n)

    PSEUDO CODE:
        - const duplicates = new Set();
        - 
 */
