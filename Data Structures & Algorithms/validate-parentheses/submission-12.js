class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const closedToOpen = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let i = 0; i < s.length; i++) {
            if (closedToOpen[s[i]]) {
                if (stack.length && stack[stack.length - 1] === closedToOpen[s[i]]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0; 
    }
}
