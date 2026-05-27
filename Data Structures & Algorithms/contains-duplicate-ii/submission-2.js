class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const indexMap = new Map(); 

        for (let i = 0; i < nums.length; i++) {
            if (indexMap.has(nums[i])) {
                if (i - indexMap.get(nums[i]) <= k) {
                    return true; 
                }
            }

            indexMap.set(nums[i], i)
        }

        return false; 
        
    }
}
/*
nums = [1,2,3,1], k = 3
nums [2,1,2], k = 1
      0 1
*/ 

/**
 INPUT: []int  ->  nums;
        int    ->    k  
 OUTPUT: boolean  ->  if nums[i] === nums[j]  && Math.abs(i - j) <= k
 CONSTRAINTS: 1 <= nums.length <= 100,000
            - How large nums[i]  ->   -1,000,000,000 <= nums[i] <= 1,000,000,000
            - k   0 <= k <= 100,000


 EXAMPLES:   [1,3, 4, 3]   k = 1   false 

 INITIAL APPROACH: 
        - indexMap = Map(); 
        - seen = new Set()
        - for loop over nums;
            - if (indexMap(nums[i])) {
                continue; 
            }
            - indexMap[nums[i]] = i;
        - for loop over nums 
            - if set.has(nums[i]) {
                return Math.abs(indexMap[nums[i] - nums[i]])
            }
            - add nums[i] to set 

    Time: O(n)
    Space: O(n)


 */
