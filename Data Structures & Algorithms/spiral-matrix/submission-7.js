class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const result = [];
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        const directions = [
            [0, 1], // right
            [1, 0], // down
            [0, -1], // left
            [-1, 0], // up
        ];

        let r = 0;
        let c = 0;
        let dir = 0;

        for (let i = 0; i < rows * cols; i++) {
            result.push(matrix[r][c]);
            visited[r][c] = true;

            let nr = r + directions[dir][0];
            let nc = c + directions[dir][1];

            if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || visited[nr][nc]) {
                dir = (dir + 1) % 4; // turn right
                nr = r + directions[dir][0];
                nc = c + directions[dir][1];
            }

            r = nr;
            c = nc;
        }

        return result;
    }
}
