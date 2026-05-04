class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     
        Input: nums = [1,1,2,3,4], val = 1
                       2,3,4   
        Output: [2,3,4]

     */
    removeElement(nums, val) {
        let k = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k; 
    }
}
