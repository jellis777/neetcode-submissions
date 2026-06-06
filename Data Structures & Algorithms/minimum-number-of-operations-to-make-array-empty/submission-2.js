class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     
     nums = [2,3,3,2,2,4,2,3,4]       2 = 0      operations = 4
                                      3 = 0
                                      4 = 2
     */
    minOperations(nums) {
        const count = {};
        let operations = 0;

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let num in count) {
            if (count[num] === 1) return -1;

            operations += Math.ceil(count[num] / 3); 
        }

        return operations;
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: int   -> minimum number of operations required to make the array empty or -1 if not possible

 CONSTRAINTS: 2 <= nums.length <= 100,000
              1 <= nums[i] <= 1,000,000

 EDGE CASES: [2, 2, 2, 2, 2, 1]  -> -1
             [1, 1,1,1,1, 1, 1]  -> 3

 INITIAL APPROACH:  - Iterate over nums
                        - Insert the count of each num  to count = {}
                    -Iterate over each num in count
                        - operations += count[num] / 2   || count[num] / 3
                        - if not return -1; 
                    - return operations

                    Time: O(n)
                    Space: O(n)

 
 */
