class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const result = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let right = matrix[0].length - 1;
        let left = 0;

        while (top <= bottom && left <= right) {
            // 1. left -> right
            for (let col = left; col <= right; col++) {
                result.push(matrix[top][col]);
            }
            top++;

            // 2. top -> bottom
            for (let row = top; row <= bottom; row++) {
                result.push(matrix[row][right]);
            }
            right--;

            // 3. right -> left;
            if (top <= bottom) {
                for (let col = right; col >= left; col--) {
                    result.push(matrix[bottom][col]);
                }
                bottom--;
            }

            // 4. bottom -> top
            if (left <= right) {
                for (let row = bottom; row >= top; row--) {
                    result.push(matrix[row][left]);
                }
                left++;
            }
        }

        return result;
    }
}
