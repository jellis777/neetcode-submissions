class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let freq = {}; 
        let minEven = Infinity,
            maxOdd = -Infinity;

        for (let char of s) {
            freq[char] = (freq[char] || 0) + 1;
        }

        for (let char in freq) {
            if (freq[char] % 2 === 1) {
                maxOdd = Math.max(maxOdd, freq[char])
            } else {
                minEven = Math.min(minEven, freq[char])
            }
        }

        return maxOdd - minEven; 
    }
}


/**
 Input: string;    Output: number -> maxDiff of frequency;


 */