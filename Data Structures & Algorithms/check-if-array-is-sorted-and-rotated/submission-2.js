class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let decrease = 0;

        for (let i = 0; i < nums.length; i++) {
            const next = (i + 1) % nums.length

            if (nums[i] > nums[next]) {
                decrease++
            }

            if (decrease > 1) {
                return false; 
            }
        }

        return true; 
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: boolean  ->  TRUE if nums when rotated into original position is sorted

 CONSTRAINTS: - 1 <= nums.length <= 100
              - 1 <= nums[i] <= 100

 EDGE CASES: nums = [1]  -> true
             nums = [2, 1] -> true
             nums = [3, 2, 1] 
                    [1, 3, 2]
                    [2, 1, 3]  -> false

              nums = [82, 84, 83] -> false

 INITIAL APPROACH:   - sorted = true
                     - decrease = 0 
                     - Iterate through nums
                            - If nums[i] < nums[i - 1] {
                                decrease++
                            }

                            -If decrease > 1 {
                                sorted = false
                            }
                     - return sorted;

                     Time: O(n)
                     Space: O(1)
 */
