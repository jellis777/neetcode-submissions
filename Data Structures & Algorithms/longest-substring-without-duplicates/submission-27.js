class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     * Pattern: Sliding Window - dynamic
     * Tools: HashSet; 
     * 
Example 1:
Input: s = "zxyzxyz"
Time: O(n); 
Space = O(n);

Output: 3
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set(); 
        let maxLen = 0; 
        let left = 0; 

        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right]))  {
                seen.delete(s[left]); 
                left++;
            } 
            seen.add(s[right]); 

            maxLen = Math.max(maxLen, right - left + 1); 
        }

        return maxLen; 

    }
}
