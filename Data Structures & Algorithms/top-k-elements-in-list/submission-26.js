class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
        }

        for (const [c, f] of Object.entries(countMap)) {
            freq[f].push(c);
        }

        let result = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
