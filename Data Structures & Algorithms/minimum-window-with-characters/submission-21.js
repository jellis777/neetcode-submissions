class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return ''; 

        let need = {}
        let window = {}

        for (let char of t) {
            need[char] = (need[char] || 0) + 1;
        }

        let have = 0;
        let needCount = Object.keys(need).length;
        let minLen = Infinity, 
            result = [-1, -1],
            l = 0;
        
        for (let r = 0; r < s.length; r++) {
            window[s[r]] = (window[s[r]] || 0) + 1;

            if (need[s[r]] && window[s[r]] === need[s[r]]) {
                have++
            }

            while (have === needCount) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    result = [l, r]
                }

                window[s[l]]--;

                if (need[s[l]] && window[s[l]] < need[s[l]]) {
                    have--;
                }

                l++; 
            }
        }

        return minLen === Infinity ? "" : s.slice(result[0], result[1] + 1)
    }
}
