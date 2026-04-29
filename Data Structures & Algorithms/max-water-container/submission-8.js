class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = -Infinity; 

        while (left < right) {
            const width = right - left; 
            const h = Math.min(heights[left], heights[right])
            const area = width * h; 

            max = Math.max(max, area); 

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max; 
    }
}
