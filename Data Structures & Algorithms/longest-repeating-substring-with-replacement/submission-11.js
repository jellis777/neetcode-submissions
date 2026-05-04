class Solution {
    /**
     * @param {string} s 
     * @param {number} k
     * @return {number} maxLen
     
     Example 1:
Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1

Output: 5
     
     */
    characterReplacement(s, k) {
        const count = {}; 

        let maxFreq = 0;
        let maxLen = 0; 
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1; 

            maxFreq = Math.max(maxFreq, count[s[right]]); 

            if ((right - left + 1) - maxFreq > k) {
                count[s[left]]--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen; 
    }
}
