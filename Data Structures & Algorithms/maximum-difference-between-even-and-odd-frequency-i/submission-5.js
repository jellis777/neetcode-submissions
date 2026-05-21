class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = {}; 
        let maxFreq = -Infinity
        let minFreq = Infinity


        // Insert letters into freq
        for (let char of s) {
            freq[char] = (freq[char] || 0) + 1; 
        }

        for (let char in freq) {
            if (freq[char] % 2 === 1) {
                maxFreq = Math.max(maxFreq, freq[char])
            } else if (freq[char] % 2 === 0) {
                minFreq = Math.min(minFreq, freq[char])
            }
        }

        return maxFreq - minFreq; 
    }
}


/**
 - Create a Map containing the frequency; 
 - Find the largest odd frequency of a char
- Find the smallest even frequency of another char.
- Return the difference

Time: O(n)
Space: O(1)
 */