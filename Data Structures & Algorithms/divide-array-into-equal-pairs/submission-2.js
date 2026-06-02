class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const numCount = {};

        for (let num of nums) {
            numCount[num] = (numCount[num] || 0) + 1;
        }

        for (let num in numCount) {
            if (numCount[num] % 2 !== 0) {
                return false;
            }
        }

        return true;
    }
}

/**
 INPUT: []int  -> nums
 OUTPUT: boolean ->  Each element belongs to exactly one pair
                     The elements present in a pair are equal  

 CONSTRAINTS: 1 <= nums.length <= 500
              1 <= nums[i] <= 500

 EDGE CASES: [1, 2]  =>  false  --- only one pair and doesn't match
             [2, 4, 4, 2, 1, 3] => false  --- (1, 3) not matching

 INITIAL APPROACH:   -  Divide nums.length by 2
                     - pairs variable count
                     -  hashmap of count; iterate over nums and insert num and count into hashmap
                     - iterate over map
                         - if count is of multiples of 2
                     - return pairs === nums.length / 2

                     Time: O(n)
                     Space: O(n)
 */
