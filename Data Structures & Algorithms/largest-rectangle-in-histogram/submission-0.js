class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; 
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let start = i;
            const height = heights[i];

            while (
                stack.length > 0 && 
                stack[stack.length - 1][1] > height
            ) {
                const [index, poppedHeight] = stack.pop(); 

                const width = i - index;
                const area = poppedHeight * width;

                maxArea = Math.max(maxArea, area);

                start = index; 
            }

            stack.push([start, height]);
        }

        for (const [index, height] of stack) {
            const width = heights.length - index;
            const area = height * width;

            maxArea = Math.max(maxArea, area); 
        }

        return maxArea; 
    }
}
