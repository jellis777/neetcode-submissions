class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let str of strs) {
            const key = str.split("").sort().join(""); 

            if (!(key in map)) {
                map[key] = []; 
            }

            if (key in map) {
                map[key].push(str); 
            }
        }

        return Object.values(map); 
    }
}
