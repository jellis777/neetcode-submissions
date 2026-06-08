class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let goodPairs = 0;
        let count = {};

        for (let num of nums) {
            goodPairs += count[num] || 0;
            count[num] = (count[num] || 0) + 1;
        }

        return goodPairs;
    }
}

/**
 INPUT: []int  -> nums

 OUTPUT: int  -> NUMBER OF GOOD PAIRS

 CONSTRAINTS:   - GOOD PAIR IS:
                        - nums[i] === nums[j]  &&
                        - i < j

                - 1 <= nums.length <= 100
                - 1 <= nums[i] <= 100

 EDGE CASES:  [1, 2, 3, 3]  -> 1
              [6, 6, 6, 6, 6]  -> 10  Many duplicates

  INITIAL APPROACH:  Brute Force O(n^2)
                - nested loops 
                        - outer loop i = 0;
                            - inner loop = j + 1
                                    - IF (nums[i] === nums[j]) 
                                            -goodPairs++
                                    
                  - return goodPairs; 

                Time: O(n^2)
                Space: O(1)


 */
