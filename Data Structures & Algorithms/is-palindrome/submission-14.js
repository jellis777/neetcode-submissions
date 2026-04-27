class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {


        let left = 0; 
        let right = s.length - 1

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
        if (
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9') 
        ) {
            return true;
        }

        return false; 
    }

}
