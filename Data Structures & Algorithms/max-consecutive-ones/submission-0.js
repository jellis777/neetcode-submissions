class Solution {
    /**
    I/O:
    - Input: nums int[]
    - Output: Number of consecutive 1's
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                let length = 1;
                while (nums[i + length] === 1) {
                    length++;
                }

                max = Math.max(length, max);
            }
        }

        return max; 
    }
}
