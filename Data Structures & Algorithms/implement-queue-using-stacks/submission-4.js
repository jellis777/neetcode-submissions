class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.inStack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        this.moveStacks();

        return this.outStack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        this.moveStacks();

        return this.outStack[this.outStack.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.outStack.length === 0 && this.inStack.length === 0;
    }

    moveStacks() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
