class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length; 
        const output = new Array(n).fill(1); 

        // LEFT 
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i]; 
        }

        // RIGHT
        let postfix = 1;
        for (let i = n - 1; i >= 0; i-- ) {
            output[i] *= postfix;
            postfix *= nums[i]; 
        }

        return output
        
    }
}
