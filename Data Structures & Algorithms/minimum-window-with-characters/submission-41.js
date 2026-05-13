class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return ""

        let have = 0;
        let window = {}; 
        let need = {}; 
        let result = [-1, -1]; 
        let minLen = Infinity;

        for (let char of t) {
            need[char] = (need[char] || 0) + 1
        }

        let needCount = Object.keys(need).length

        let left = 0; 
        for (let right = 0; right < s.length; right++) {
            let char = s[right]; 
            window[char] = (window[char] || 0) + 1; 

            if (need[char] && window[char] === need[char]) {
                have++; 
            }

            while (needCount === have) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    result = [left, right]; 
                }

                window[s[left]]--;

                if (need[s[left]] && window[s[left]] < need[s[left]]) {
                    have--; 
                }

                left++
            }
        }

        const [start, end] = result;
        return minLen === Infinity ? "" : s.slice(start, end + 1)
    }
}
