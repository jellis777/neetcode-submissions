class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        let firstRowZero = false;
        let firstColZero = false;

        // 1. Check first row
        for (let col = 0; col < n; col++) {
            if (matrix[0][col] === 0) {
                firstRowZero = true;
            }
        }

        // 2. Check first column
        for (let row = 0; row < m; row++) {
            if (matrix[row][0] === 0) {
                firstColZero = true;
            }
        }

        // 3. Use first row/col as markers
        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        // 4. Zero cells based on markers
        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                    matrix[row][col] = 0;
                }
            }
        }

        // 5. Fix first row
        if (firstRowZero) {
            for (let col = 0; col < n; col++) {
                matrix[0][col] = 0;
            }
        }

        // 6. Fix first column
        if (firstColZero) {
            for (let row = 0; row < m; row++) {
                matrix[row][0] = 0;
            }
        }
    }
}

