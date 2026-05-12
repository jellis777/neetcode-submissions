class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0; 
        let count = {}; 
        let maxLen = 0; 
        let left = 0; 

        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1; 

            maxFreq = Math.max(count[s[right]], maxFreq); 

            if ((right - left + 1) - maxFreq > k) {
                count[s[left]]--;
                left++; 
            }

            maxLen = Math.max(maxLen, right - left + 1); 
        }

        return maxLen; 

    }
}
