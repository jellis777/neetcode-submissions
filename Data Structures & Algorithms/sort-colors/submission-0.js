class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     * 
     Input: nums = [1,0,1,2]
                    l     r
                    0,1
                          i
                      l  
     Output: [0,1,1,2]
     */
    sortColors(nums) {
        let left = 0;
        let i = 0;
        let right = nums.length - 1;

        while (i <= right) {
            if (nums[i] === 0) {
                [nums[i], nums[left]] = [nums[left], nums[i]]
                left++;
                i++
            } else if (nums[i] === 2) {
                [nums[i], nums[right]] = [nums[right], nums[i]];
                right--;
            } else {
                i++;
            }
        }
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: []int   ->  The colors grouped in order 0, 1, 2 (ascending)

 CONSTRAINTS:  1 <= nums.length <= 300
               0 <= nums[i] <= 2
               CAN'T USE SORTING METHODS
               SORT IN PLACE
             **  Aim for a one-pass algorithm using only constant extra space **

  EDGE CASES: [1, 1, 1, 1]  -> [1, 1, 1, 1]  All one color
            [0, 1, 1, 2, 2]   Already sorted
            [2, 2, 2, 1, 0, 0] -> [0, 0, 1, 2, 2, 2] Started in descending order

    INITIAL APPROACH:
        - 0's go to the left
        - 2's go to the right
        - 1's stay in the middle 
 */
