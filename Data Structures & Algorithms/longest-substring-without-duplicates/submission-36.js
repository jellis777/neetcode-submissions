class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        const seen = new Set()

        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left]) 
                left++
            }
            longest = Math.max(longest, right - left + 1)
            seen.add(s[right])
        }
            return longest; 

    }
}
