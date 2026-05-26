class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m - 1;
        let j = n - 1;
        let k = m + n - 1;

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k] = nums1[i]
                i--; 
            } else {
                nums1[k] = nums2[j]
                j--;
            }
            k--; 
        }
    }
}

/**
 CLARIFY: 
    - INPUT: nums1 -> []int;  m -> int (# of nums1 to be merged); nums2 -> []int; n -> int (# of nums2 to be merged)
    - OUTPUT: []int   ->  Modified in-place; sorted by ascending order; No return;
    - CONSTRAINTS/ RULES: 
            - Both nums1 and nums 2 are sorted
            - m, n <= 200; 
    - EDGE CASES: 
            - nums1 = []; m = 0; n = 0; nums2 = []  -> return []; 
            - Most edge cases are covered by the constraints; 

- INITIAL APPROACH:
    -   i = m - 1;
    -   j = n - 1;
    -   k = n + m - 1

    while (j >= 0)
    nums1[i]  > nums2[j] {nums1[i] swap with nums1[k] }  i--; k--;    

        - Then nums1[k] = nums2[j]


        nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2
                   k                                  j
                [0,0,10,20, 20,40]
 */