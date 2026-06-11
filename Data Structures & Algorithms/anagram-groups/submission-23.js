class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let str of strs) {
            const count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.join(",");

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(str);
        }

        return Object.values(groups)
    }
}

/**

 INPUT: []string -> strs
 OUTPUT: [][]string  -> grouped anagrams into sublists (in any order)
 CONSTRAINTS: 1 <= strs.length <= 1000
               - 0 <= strs[i].length <= 100
              - each string contains only lowercase letters
 EDGE CASES: ["", "act", "hat", "tree"]  -> [[""], ["act"], ["hat"], ["tree"]]  All would have its own array
            - All could be anagrams; so then all would be in same nested array 


 INITIAL APPROACH:   - Iterate over strs
                     -  new Array -> keep frequency count of the str; 
                     -  Iterate over each str 
                             - Increase freqcount of each char in array 
                     -  create a key by joining the array 
                     - insert the key into the map if it doesn't have it and it will contain an []
                     - push str into map[key] 
                     - return Object.values(map)

            Time: O(n * m)   -> strs.length * longest str
            Space: O(n)  -> combinations of keys in map 

 

 */
