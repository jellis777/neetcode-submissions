class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const map = {};

        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for (let [num, count] of Object.entries(map)) {
            freq[count].push(num);
        }

        let result = [];
        for (let num = freq.length - 1; num >= 0; num--) {
            for (let element of freq[num]) {
                result.push(element);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
