class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const INF = 2147483647;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let queue = [];
        let head = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;

                if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== INF) {
                    continue;
                }

                grid[nr][nc] = grid[r][c] + 1;

                queue.push([nr, nc]);
            }
        }
    }
}
