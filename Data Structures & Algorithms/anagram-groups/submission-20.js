class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let str of strs) {
            const freq = new Array(26).fill(0);

            for (let char of str) {
                freq[char.charCodeAt(0) - 97]++;
            }

            const key = freq.join(",");

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(str);
        }

        return Object.values(groups)
    }
}
