class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []; 
        const map = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        };

        for (let char of s) {

            // if closing bracket 
            if (char in map) {

                // check stack
                if (stack.length === 0 || stack.pop() !== map[char]) {
                    return false; 
                }
            
            } else {
                // opening bracket 
                stack.push(char); 
            }
        }

        return stack.length === 0; 
    }
}
