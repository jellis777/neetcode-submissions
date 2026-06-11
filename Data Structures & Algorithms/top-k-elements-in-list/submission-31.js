class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let [num, amount] of Object.entries(count)) {
            freq[amount].push(num);
        }

        const result = [];
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
