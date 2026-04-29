class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closedToOpen = {
         '}' : '{' ,
         ']' : '[' , 
         ')' : '(' ,
        }

        for (const char of s) {
            if (closedToOpen[char]) {
                if (stack.length > 0 && stack[stack.length - 1] === closedToOpen[char]) {
                    stack.pop(); 
                } else {
                    return false; 
                } 
            } else {
                stack.push(char); 
            }
        }
       
       return stack.length === 0 
    }
}
