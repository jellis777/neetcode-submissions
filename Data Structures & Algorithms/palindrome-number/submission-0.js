class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false;

        function intToArr(int) {
            const nums = [];
            while (int > 0) {
                nums.push(int % 10);
                int = Math.floor(int / 10);
            }

            return nums.reverse();
        }

        function isPalindrome(nums) {
            let left = 0;
            let right = nums.length - 1;

            while (left < right) {
                if (nums[left] === nums[right]) {
                    left++;
                    right--;
                } else {
                    return false;
                }
            }
            return true;
        }

        const nums = intToArr(x);
        return isPalindrome(nums);
    }
}

/**
 CLARIFY:
    - INPUT: int -> x
    - OUTPUT: boolean -> IF x i s a palindrome 
    - CONSTRAINTS: - input could be very large
                    - Negative sign matters
                    - Solve without coverting integer into a string
                    - x will always be int

    - EDGE CASES: - If x is negative -> false
                  - If x is a single positive digit or 0 -> true
                  - If x is empty -> true

    INITIAL APPROACH: 
            - Left and right pointers  
            - Make an array by using a while loop and pushing each digit into the array
            - If x is not >= 0 return false; 
            - Check left to right 

            Time: O(n)
            Space: (1)

    PSEUDO CODE: 
            - If x < 0 THEN return false
            - Helper function(numToArr) that converts x into an array of integers 
            - isPalindrome(l, r)
                  - Use left and right pointers (end to end) to iterate over the array (nums)
                   - If nums[left] !== nums[right] return false; 
            - return true; 

            Time O(n); -> length of digits of x
            Space:  O(1)
 */
