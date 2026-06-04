class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let have = 0;
        let left = 0;
        let windowCount = {};
        let needCount = {};

        for (let char of t) {
            needCount[char] = (needCount[char] || 0) + 1;
        }

        let need = Object.keys(needCount).length;
        let minLength = Infinity;
        let result = [-1, -1];

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            windowCount[char] = (windowCount[char] || 0) + 1;

            if (needCount[char] && windowCount[char] === needCount[char]) {
                have++;
            }

            while (need === have) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    result = [left, right];
                }

                windowCount[s[left]]--;

                if (needCount[s[left]] && windowCount[s[left]] < needCount[s[left]]) {
                    have--;
                }

                left++;
            }
        }
        const [start, end] = result;
        return minLength === Infinity ? "" : s.slice(start, end + 1)
    }
}

/**
 INPUT: string -> s
        string -> t
 OUTPUT: string   -> shortest substring of s that contains every character(including duplicates) of t
 CONSTRAINTS: 1 <= s.length <= 1000
            1 <= t.length <= 1000
            s and t consists of uppercase and lowercase letters
 EDGE CASES: s = "OOOXXYzx" t = "XXzx"  -> "XXYzx"  Containing duplicates and both cases
            s = "x"   t = "xy"  -> ""  No substring exists

 INITIAL APPROACH:  Dynamic Sliding windowCount and two hashmaps to match counts
    - Create two hashmaps
    - Iterate over t and insert into need map
    - need = Get Count of keys of need map
    - have = 0
    - minLength = Inifinity
    - l & r pointers; l= 0; r = 0; 
     - expand r and add current element to our windowCount map 
     - IF need[element] & windowCount[element] === need[element] 
            -THEN have++; 
     - WHILE (need === have)
            - if right - left +1 < minLength 
                    - minLength = right - left + 1;
                    - result = [left, right]
            windowCount[s[left]]--;
            - if need[s[left] && windowCount[s[left]] < windowCount[s[left]]]
                  - have--;
                  shrink from left; left++
    - [start, end] = result
    - return minLength === Infinity ? "" : s.slice(start, end + 1)

    Time: O(n + m)
    Space: O(n + m)
 */
