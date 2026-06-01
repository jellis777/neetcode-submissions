class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     
     DRY RUN:
     Input: height = [1,7,2,5,4,7,3,6]     
    Output: 36          l   r             maxArea = 36
                      0 1         6  7               28
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;

        while (l < r) {
            let width = r - l
            let h = Math.min(heights[l], heights[r] );
            let currArea = width * h;

            maxArea = Math.max(currArea, maxArea); 

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--; 
            }
        }

        return maxArea; 
    }
}

/**
 * INPUT: []int -> height
 * OUTPUT: int -> maxAmount  of water a container can store
 * CONSTRAINTS: 2 <= height.length <= 1000
 *              0 <= height[i] <= 1000
 * EDGE CASES: [2, 1]  SMALL WIDTH AND HEIGHT -> 1 * 1 = 1
 *              [6, 6, 6, 6, 6] DUPLICATES  -> 6 * 4 = 24
 *              [0, 1, 0, 2]   -> 2 * 1 = 2; 
 * 
 * INITIAL APPROACH: 
 *          - Because we want the largest area we want the largest width we can get 
 *                  - So use two pointers one on left(0) and one on the right(height.length -1)
 *          - For height, we can only get the minimum of both elements to be able to store the water. 
 *          - Store the area, by width(right - left) * the height(min element of the two)
 *          - update the maxArea each time;
 *          - We want the larger height, so whatever one is not largest we shrink that side. 
 *          - return maxArea.
 * 
 *          Time: O(n)
 *          Space: O(1)
 * 
 * PSEUDO CODE/PLAN:
 *      - variables: maxArea, l and r
 *      - while (l < r) 
 *            - width = r - l
 *             - h = Math.min(height[l], height[r])
 *             - currArea = width * h
 *              - maxArea = Math.max(maxArea, currArea)
 *              -IF height[l] < height[r] 
 *                      - l++ 
 *              - ELSE 
 *                      -r--
 *      - return maxArea
 */