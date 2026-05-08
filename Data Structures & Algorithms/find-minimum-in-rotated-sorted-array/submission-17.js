class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     
     Input: nums = [3,4,5,6,1,2]
                          m  4
                          l r

            nums = [4,5,6,7]
                        
                    l 
                    m
                    r
     */                     l
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid; 
            }
        }

        return nums[left]; 
    }
}
