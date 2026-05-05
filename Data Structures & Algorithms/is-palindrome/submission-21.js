class Solution {
    /**
    @param {string} s
    @return {boolean}

    CLARIFICATIONS: 
    - Returning True if s is a palindrome.
    - A palidrome is read the same forward and backward.
        - case-insensitive and ignores all non-alphanumeric characters

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true

    PLAN: - Two Pointers
          - Skip every non-alphanum
          - Return false anytime the elements don't match 

     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNum(s[left])) {
                left++;
            }

            while (left < right && !this.isAlphaNum(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false; 
            } 
            left++;
            right--;
        }

        return true; 
    }

    isAlphaNum(char) {
        return /^[a-z0-9]$/i.test(char)
    }
}
