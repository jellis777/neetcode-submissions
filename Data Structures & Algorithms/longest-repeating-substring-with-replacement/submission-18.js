class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let left = 0;
        let count = {}; 
        let maxFreq = 0; 

        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1; 

            maxFreq = Math.max(maxFreq, count[s[right]]); 

            if ((right - left + 1) - maxFreq > k) {
                count[s[left]]--;
                left++; 
            }

            longest = Math.max(longest, right - left + 1)
        }

        return longest; 
    }
}
