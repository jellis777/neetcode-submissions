class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
            const sorted = nums.sort((a, b) => a - b);
            let minDifference = Infinity;

            for (let i = 0; i <= sorted.length - k; i++) {
                let j = i + k - 1;
                minDifference = Math.min(minDifference, sorted[j] - sorted[i]);
            }

            return minDifference; 
    }
}


/*
    [1, 4, 7, 9]


    INPUT: []int  -> nums
            int  ->  k

    OUTPUT:  int   -> The minimum possible difference between highest and lowest scores

    CONSTRAINTS:  1 <= k <= nums.length <= 1000
                  0 <= nums[i] <= 100,000

    EDGE CASES: - nums = [3]  k = 1  ->  3
                  nums = [4, 5, 8] k = 2   ->  1


     nums = [2,5,3,1,6,3],          k = 3
            [1, 2, 3, 3, 5, 6]
                      l     r

    INITIAL APPROACH:  - Sort nums -> sorted
                        -  let minDifference = 0   
                        - Iterate  i = 0; i < nums.length - k
                               let j = i + k - 1;
                               minDifference = Math.min(minDifference, nums[j] - nums[i]); 
                        - return minDifference

                        Time: O(n log n);
                        Space: O(1)



 */