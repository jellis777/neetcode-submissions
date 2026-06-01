class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const seen = new Set(nums1);
        let result = new Set(); 

    

        for (let num of nums2) {
            if (seen.has(num)) {
                result.add(num)
            }

        }

        return Array.from(result); 
    }
}

/**
 INPUT: nums1 -> []int; nums2 -> []int
 OUTPUT: []int -> same unique numbers (set) in both nums1 and nums2
 CONSTRAINTS: 1 <= nums1.length, nums2.length <= 1000
               0 <= nums1[i], nums2[i] <= 1000
 EDGE CASES: nums1 = [1, 1, 1, 1] nums2 = [ 0, 1, 2, 3, 1, 1, 1]   ->  [1]  multiple duplicates still returns one occurrence
                     [2]                    [1]                    ->  []   empty because no match
                     [5, 3, 4, 2]           [3, 2, 4, 1, 1]         -> [2, 3, 4]

INITIAL APPROACH: 
         -  Use Set(nums1)
         - Iterate through nums2 
                - compare with set.has(num)
                -IF so THEN push into result[]
        - return result

        Time: O(n)  -> iterating over nums2
        Space: O(m)  -> using a set over nums1

        *Seems to be optimal 


        Final Time: O(n + m)
        Final Space O(n + k); 
    
 */