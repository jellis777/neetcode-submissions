class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const output = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                output[prevIndex] = i - prevIndex;
            }

            stack.push(i);
        }

        return output;
    }
}
