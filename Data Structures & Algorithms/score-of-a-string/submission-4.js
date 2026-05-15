class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;

        for (let i = 0; i < s.length - 1; i++) {
            let curr = s.charCodeAt(i);
            let next = s.charCodeAt(i + 1); 

            score += Math.abs(curr - next); 
        }

        return score; 
    }
}
