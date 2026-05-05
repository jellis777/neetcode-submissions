class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // Example 1:

    // Input: nums = [2,20,4,10,3,4,5]

    // Output: 4
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length++;
                }

                maxLength = Math.max(maxLength, length);
            }
        }

        return maxLength;
    }
}
