class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1; 

        while (left < right) {
            while (left < right && this.isNotAlphaNum(s[left])) {
                left++;
            }

            while (left < right && this.isNotAlphaNum(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false; 
            }
            right--;
            left++;
        }

        return true; 
    }

    isNotAlphaNum(char) {
        return /[^a-z0-9]/ig.test(char)
    }
}
