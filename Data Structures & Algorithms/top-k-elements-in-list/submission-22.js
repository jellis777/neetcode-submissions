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
        const map = {};

        const arr = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for (let [num, freq] of Object.entries(map)) {
            arr[freq].push(Number(num));
        }

        let result = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            for (let freq of arr[i]) {
                result.push(freq);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
