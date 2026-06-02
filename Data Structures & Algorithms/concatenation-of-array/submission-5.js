class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length 
        const output = new Array(n * 2).fill(0);

        for (let i = 0; i < nums.length; i++) {
            output[i] = nums[i]
            output[i + n] = nums[i]
        }

        return output; 
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: []int  -> concatenation of nums with itself
 CONSTRAINTS:  -    1 <= nums.length <= 1000
              -     1 <= nums[i] <= 1000
 EDGE CASES:  -  [2]  -> [2, 2]
              -  [1, 1, 1] -> [1, 1, 1, 1, 1, 1]

 INITIAL APPROACH:   - Make an output array twice the length of nums;
                     - Iterate over nums & insert into output[i] and output[i + n]
                     - return output

                     Time: O(n)
                     Space: O(n); 
 */