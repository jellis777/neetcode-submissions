class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let freq = {}; 
        let minFreq = Infinity,
            maxFreq = -Infinity;

        for (let char of s) {
            freq[char] = (freq[char] || 0) + 1;
        }

        for (let char in freq) {
            if (freq[char] % 2 === 1) {
                maxFreq = Math.max(maxFreq, freq[char])
            } else {
                minFreq = Math.min(minFreq, freq[char])
            }
        }

        return maxFreq - minFreq; 
    }
}


/**
 Input: string;    Output: number -> maxDiff of frequency;


 */