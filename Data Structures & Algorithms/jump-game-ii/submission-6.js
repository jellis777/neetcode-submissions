class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let farthest = 0;
        let currentEnd = 0;
        let jumps = 0; 

        for (let i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]); 

            if (currentEnd === i) {
                jumps++;
                currentEnd = farthest;
            }
        }

        return jumps; 
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: int   -> min number of jumps to reach last position in the array 


 CONSTRAINTS: 1 <= nums.length <= 1000
              0 <= nums[i] <= 100
              YOU MAY ASSUME YOU ALWAYS HAVE A VALID ANSWER

 EDGE CASES: nums = [1, 2]  -> 1  

 INITIAL APPROACH: 
        - Keep track of farthest and currentEnd
        - IF i === currentEnd
                - jumps++;
                - currentEnd = farthest
        - return jumps

 */