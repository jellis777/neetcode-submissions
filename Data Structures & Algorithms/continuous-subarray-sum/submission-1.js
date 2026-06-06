class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        const remainderToIndex = new Map();
        remainderToIndex.set(0, -1); 

        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]; 
            const remainder = sum % k; 

            if (remainderToIndex.has(remainder)) {
                const prevIndex = remainderToIndex.get(remainder); 

                if (i - prevIndex >= 2) {
                    return true; 
                }
            } else {
                remainderToIndex.set(remainder, i)
            }
        }

        return false
    }
}


/**
 INPUT:  []int  -> nums
           int   -> k
 OUTPUT: boolean   ->   if nums has a good array
                        GOOD ARRAY =  a subarray has length of at least two &&
                                            the sum of the elements of the subarray is a multiple of k

 CONSTRAINTS: - 1 <= nums.length <= 1,000,000
              -  0 <= nums[i] <= 1,000,000,000
            

 EDGE CASES: -  nums = [4], k = 4  -> false    good arrays must have at least 2 elements
                nums = [23, 2, 4, 6, 7], k = 6;    -> true   Having a subarray of length 2 and sum is equal to k

 INITIAL APPROACH: - Aim for linear time complexity because of potential large input
                    - Brute force would be nested loops checking the sum of each element O(n^2)
                    

 */