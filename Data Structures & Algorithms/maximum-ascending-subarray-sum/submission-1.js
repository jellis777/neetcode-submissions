class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let sum = nums[0]; 
        let maxSum = sum;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                sum += nums[i]
            } else {
                sum = nums[i]
            }

            maxSum = Math.max(maxSum, sum)
        }

        return maxSum; 
    }
}

/**
  INPUT: []int -> nums
  OUTPUT:  int   ->  max Sum of a strictly increasing subarray in nums

  CONSTRAINTS: 1 <= nums.length <= 100
               1 <= nums[i] <= 100

  EDGE CASES: [20]  -> 20
              [20, 10, 5]  -> 20

 INITIAL APPROACH:  
                - sum = nums[0]
                - maxSum = 0
                - Traverse from i = 1 through nums 
                    - IF nums[i] is > than nums[i - 1 ]Add to sum 
                    -OTHERWISE:  sum = nums[i]
                    - maxSum = Math.max(maxSum, sum)
                - return maxSum;

            Time: O(n);
            Space: O(1); 
 */
