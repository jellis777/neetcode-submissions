class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let freqMap = {};
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freqMap[s[right]]);

            if (right - left + 1 - maxFreq > k) {
                freqMap[s[left]]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
