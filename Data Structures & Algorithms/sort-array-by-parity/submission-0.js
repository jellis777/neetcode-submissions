class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let l = 0
         let r = nums.length - 1;
         console.log(r)

        while (l < r) {
            // left already even -> good
            if (nums[l] % 2 === 0) {
               l++
            // right is already odd -> good
            } else if (nums[r] % 2 === 1) {
                r--; 
            } else {
                [nums[l], nums[r]] = [nums[r], nums[l]]; 
                l++;
                r--; 
            }
        }

        return nums; 
    }
}

/**
 INPUT: []int -> nums
 OUTPUT: []int -> even numbers of nums first and then odd numbers;
 CONSTRAINTS: - nums.length <= 5000
              - only positive?  0 <= nums[i] <= 5000
              - Doesn't have to be in order
  EDGE CASES: [1] -> [1]   odd stays at end
              [0] -> [0]   even stays at front

INITIAL APPROACH: 
    - Use two pointers; l = 0;  r = nums.length - 1
    - While (l < r) 
        - IF nums[l] % 2 === 1 && nums[r] % 2 === 0 THEN swap; l++ r--
        - ELSE l++; 
    return nums

    Time: O(n)
    Space: O(1)

DRY RUN:
[2, 4, 1, 4, 3]
 3  4  4   1  2

[5, 7, 3, 1, 2]
 2  7  3  1  5

 [2, 1, 3, 5]

 */
