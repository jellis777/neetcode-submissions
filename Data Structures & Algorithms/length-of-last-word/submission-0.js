class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1;
        let length = 0;

        // skip trailing spaces
        while (i >= 0 && s[i] === " ") {
            i--;
        }

        // Count last word 
        while (i >= 0 && s[i] !== " ") {
            length++;
            i--;
        }

        return length; 
    }
}
