class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0; 
        let maxFreq = 0; 
        let left = 0
        let freq = {}


        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1;

            maxFreq = Math.max(maxFreq, freq[s[right]])

            if ((right - left + 1) - maxFreq > k) {
                freq[s[left]]--; 
                left++
            }

            longest = Math.max(longest, right - left + 1); 
            
        }

        return longest; 
    }
}
