class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {
        const strs = nums.map(String);

        strs.sort((a,b) => (b+a).localeCompare(a+b))

        const result = strs.join("")

        return result[0] === "0" ? "0" : result; 
    }
}
/**
 INPUT: []int

 OUTPUT: string  ->  largest possible number from rearranging nums in string format

 CONSTRAINTS: 1 <= nums.length <= 100
              0 <= nums[i] <= 1,000,000,000

 EDGE CASES: [0, 0, 0]  -> "0"
             [3] -> "3"
             [3, 444, 50000, 1000] -> multiple varieties of digits  "5000010004443"

 INITIAL APPROACH: - Compare first int then second; if tied with first int then compare second with first of other
                   - Could do brute force 



 */
