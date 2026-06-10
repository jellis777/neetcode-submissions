class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] !== 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
        }
    }
}

/**
 * 
  INPUT: []int
  OUTPUT: []int (modified in place) -> return nums

  CONSTRAINTS: - Minimize total number of operations
               - 1 <= nums.length <= 10,000
               
    EDGE CASES:  [0]  -> [0]
                [3,1, 2]  -> [3, 1, 2]
                [0, 0, -1, -100] -> [-1, -100, 0 , 0]

    INITIAL APPROACH:  [0,0,1,2,0,5]  
                            l     r
                        1 2 5 0 0 0  r

                        Two Pointers
                        While (r < nums.length)
                            - Swap when nums[l] === 0 && nums[l] !== nums[r]
                                    - l++
                                    -r++
                            - if (nums[l] === 0 && nums[r] === 0) 
                                    - r++

                         return nums

                    Time: O(n);
                    Space: O(1)
 */
