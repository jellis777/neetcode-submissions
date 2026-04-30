class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;

        // 1. Transpose
        for (let r = 0; r < n; r++) {
            for (let c = r + 1; c < n; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }

        // 2. Reverse each row
        for (let row of matrix) {
            row.reverse();
        }
    }
}