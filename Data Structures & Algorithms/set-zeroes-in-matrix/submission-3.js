class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let firstRowZero = false;
        let firstColZero = false;

        // Check if first row has a zero
        for (let c = 0; c < cols; c++) {
            if (matrix[0][c] === 0) {
                firstRowZero = true;
                break;
            }
        }

        // Check if first col has a zero
        for (let r = 0; r < rows; r++) {
            if (matrix[r][0] === 0) {
                firstColZero = true;
                break;
            }
        }

        // Use first row/col as markers
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                if (matrix[r][c] === 0) {
                    matrix[r][0] = 0;
                    matrix[0][c] = 0;
                }
            }
        }

        // Zero cells based on markers
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        // Zero first row if needed
        if (firstRowZero) {
            for (let c = 0; c < cols; c++) {
                matrix[0][c] = 0;
            }
        }

        if (firstColZero) {
            for (let r = 0; r < rows; r++) {
                matrix[r][0] = 0;
            }
        }
    }
}
