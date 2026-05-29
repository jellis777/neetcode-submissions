class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let distance = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > distance) return false;

            distance = Math.max(distance, i + nums[i]);

            if (distance >= nums.length - 1) {
                return true;
            }
        }
    }
}

/**
 INPUT: []int -> nums
 OUTPUT: boolean ->   IF YOU CAN REACH THE LAST INDEX STARTING FROM INDEX 0 ; 
 CONSTRAINTS:  1 <= nums.length <= 1000
 EDGE CASES: - Fall short of last index  -> false
             - Make to last index or further -> true
             - [0, 0, 0, 0] -> false
             - [1, 1, 1, 0 , 0] -> false 

 INITIAL APPROACH: 
    - For Loop over nums 
             - distance += nums[i] + i  
    - If distance < nums.length - 1   ->   return false
    - Else return true
    
    Time: O(n); 
    Space: O(1)
 */
