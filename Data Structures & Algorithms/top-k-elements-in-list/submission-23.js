class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    /*
Example 1:

Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]
    */
    topKFrequent(nums, k) {
        const map = {}

        const freq = Array.from( {length: nums.length + 1}, () => []); 

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        for (let [num, count] of Object.entries(map)) {
            freq[count].push(num); 
        }

        let result = []
        for (let i = freq.length - 1; i >= 0; i--) {
            for (let num of freq[i]) {
                result.push(num); 

                if (result.length === k) {
                    return result; 
                }
            }
        }
    }
}
