class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                if (Math.abs(seen.get(nums[i]) - i) <= k  ) {
                    return true;
                }
            }

            seen.set(nums[i], i)
        } 

        return false; 
    }


}
