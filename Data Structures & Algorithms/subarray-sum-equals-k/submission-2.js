class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0; 
        let sum = 0;

        const prefixCount = new Map(); 
        prefixCount.set(0, 1);

        for (const num of nums) {
            sum += num

            const needed = sum - k; 

            if (prefixCount.has(needed)) {
                count += prefixCount.get(needed); 
            }

            prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1); 
        }

        return count; 
    }
}
