class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;
        let prevCharCode = s[0].charCodeAt(0)

        for (let i = 1; i < s.length; i++) {
            let currCode = s[i].charCodeAt(0);
            let absDiff =  Math.abs(currCode- prevCharCode); 

            sum += absDiff; 

            prevCharCode = currCode; 
        }

        return sum; 
    }
}
