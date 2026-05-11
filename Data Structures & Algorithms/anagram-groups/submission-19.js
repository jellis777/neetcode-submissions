class Solution {
    /**
     * Input: string[] -> strs
     * Output: string[][]   ->  Grouped anagrams
 Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
     */
    groupAnagrams(strs) {
        const map = {};

        for (let str of strs) {
            const freq = new Array(26).fill(0);

            for (let char of str) {
                freq[char.charCodeAt(0) - 97]++;
            }

            const key = freq.join(",")
            
            if (!map[key]) {
                map[key] = [];
            }

            map[key].push(str)
        }

        return Object.values(map); 
    }
}
