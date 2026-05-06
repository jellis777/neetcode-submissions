class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return ""; 

        let minLen = Infinity; 

        let window = {}; 
        let need = {}; 
        let have = 0; 
        let left = 0;
        let result = [-1, -1]
        
        for (let char of t) {
            need[char] = (need[char] || 0) + 1; 
        }

        let needCount = Object.keys(need).length; 

        for (let right = 0 ; right < s.length; right++) {
            window[s[right]] = (window[s[right]] || 0) + 1; 

            if (need[s[right]] && window[s[right]] === need[s[right]]) {
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

                left++; 
            }
        }
        const [start, end] = result; 
        return minLen === Infinity ? "" : s.slice(start, end + 1); 
    }
}
