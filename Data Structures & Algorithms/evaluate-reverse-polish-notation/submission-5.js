class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                const right = stack.pop();
                const left = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(left + right);
                        break;
                    case "-":
                        stack.push(left - right);
                        break;
                    case "*":
                        stack.push(left * right);
                        break;
                    case "/":
                        stack.push(Math.trunc(left / right))
                        break;
                }
            } else {
                stack.push(Number(token))
            }
        }

        return stack[0]; 
    }
}
