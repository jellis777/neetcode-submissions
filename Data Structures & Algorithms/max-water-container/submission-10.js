class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0; 
        let right = heights.length - 1;

        while (left < right) {
            const width = right - left; 
            const h = Math.min(heights[left], heights[right])
            const area = width * h; 

            maxArea = Math.max(maxArea, area)

            if (heights[right] > heights[left]) {
                left++;
            } else {
                right--; 
            }
        }

        return maxArea; 
    }
}
