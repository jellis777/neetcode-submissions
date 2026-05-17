class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1; 

            if (count[num] > nums.length / 2) {
                return num; 
            }
        }
    }
}
