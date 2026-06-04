class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let char of s1) {
            count1[char.charCodeAt(0) - 97]++;
        }

        for (let right = 0; right < s2.length; right++) {
            let char = s2[right];

            count2[char.charCodeAt(0) - 97]++;

            if (right - left + 1 > s1.length) {
                count2[s2[left].charCodeAt(0) - 97]--;
                left++;
            }

            if (this.arraysEqual(count1, count2)) {
                return true;
            }
        }

        return false;
    }

    arraysEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    }
}
