class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        for (let x = 0; x <= nums.length; x++) {
            let count = 0;

            for (let num of nums) {
                if (num >= x) {
                    count++;
                }
            }
            if (count === x) {
                return x;
            }
        }

        return -1;
    }
}

/**
 INPUT: []int
 OUTPUT: int  

 CONSTRAINTS: 1 <= nums.length <= 100
              0 <= num[i] <= 1000

 EDGE CASES: [4, 5, 8, 3]  -> 3 
             [2]  ->  1
             [8] -> 1
             

 INITIAL APPROACH:    - [
 */
