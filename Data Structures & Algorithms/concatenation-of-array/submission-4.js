class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const output = new Array(n * 2);

        for (let i = 0; i < nums.length; i++) {
            output[i] = nums[i];
            output[i + n] = nums[i];
        }

        return output; 
    }
}
