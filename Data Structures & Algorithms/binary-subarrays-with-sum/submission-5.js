class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        return this.atMost(nums, goal) - this.atMost(nums, goal - 1); 
    }

    atMost(nums, goal) {
        if (goal < 0) return 0;

        let sum = 0;
        let left = 0; 
        let subs = 0; 

        for (let right = 0; right < nums.length; right++) {
            sum += nums[right]; 

            while (sum > goal) {
                sum -= nums[left];
                left++;
            }

            subs += right - left + 1; 
        }

        return subs; 
    }
}
