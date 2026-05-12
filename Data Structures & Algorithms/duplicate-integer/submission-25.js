class Solution {
    /**
     * 
     * @param {[]number} nums
     * @return {boolean}
     * 
     * Pattern: Array Traversal;
     * Plan: HashSet; Loop; 
     * Time/Space : O(n); O(n); 
     * 
    Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Edge cases: nums = []; 


     */
    hasDuplicate(nums) {
        const set = new Set();

        for (let num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num)
        }

        return false; 
    }
}
