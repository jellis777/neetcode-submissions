class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        const nums1Set = new Set(nums1);        // [1, 2, 3]
        const nums2Set = new Set(nums2);        // [1, 2]

        const result = Array(2).fill(0).map(() => []);

        for (let num of nums1Set) {
            if (!nums2Set.has(num)) {
                result[0].push(num)
            }
        }

        for (let num of nums2Set) {
            if (!nums1Set.has(num)) {
                result[1].push(num)
            }
        }

        return result; 
    }
}

/**
 * 
 
 INPUT: []int   -> nums1
        []int  -> nums2

 OUTPUT:  [][]int  ->  first [] list of distinct nums in nums1  
                        second[] list of distinct nums in nums2

 CONSTRAINTS: 1 <= nums1.length, nums2.length <= 1000
              -1000 <= nums1[i], nums2[i] <= 1000

 EDGE CASES:  nums1 = [1, 3, 4],  nums2 = [4, 1, 3]
                    [[], []]

              nums1 = [1, 3, 4, 4, 4],  nums2 = [4, 1, 3, 2]
                    [[], [2]]

 INITIAL APPROACH:   - Use two Sets
                            - nums1Set(nums1)
                            - nums2Set(nums2)
                        const result = Array(2).fill(0).map(() => []);
                     - Iterate over nums1
                        - If (!nums2Set.has(nums1[i])) {
                            result[0].push(nums1[i])
                        }

                    - Iterate over nums2
                        - If (!nums1Set.has(nums2[i])) {
                            result[1].push(nums2[i])
                        }
                    - return the result;

                    Time: O(n + m)
                    Space: O(n + m)

            
 
 */
