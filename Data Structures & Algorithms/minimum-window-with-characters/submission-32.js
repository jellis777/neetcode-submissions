class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let required = {};
        let window = {};

        for (let char of t) {
            required[char] = (required[char] || 0) + 1;
        }

        let have = 0;
        let needCount = Object.keys(required).length;
        let left = 0;
        let minLen = Infinity;
        let result = [-1, -1];


        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (required[char] && window[char] === required[char]) {
                have++;
            }

            while (needCount === have) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    result = [left, right];
                }

                window[s[left]]--;

                if (required[s[left]] && window[s[left]] < required[s[left]]) {
                    have--;
                }

                left++;
            }
        }

        const [start, end] = result;
        return minLen === Infinity ? "" : s.slice(start, end + 1);
    }
}
