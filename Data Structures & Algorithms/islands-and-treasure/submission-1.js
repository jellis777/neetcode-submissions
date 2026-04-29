class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const INF = 2147483647;

        const queue = [];
        let head = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        while (head < queue.length) {
            const [row, col] = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;

                if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== INF) {
                    continue;
                }

                grid[nr][nc] = grid[row][col] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}
