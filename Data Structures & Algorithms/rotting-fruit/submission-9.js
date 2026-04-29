class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let queue = [];
        let fresh = 0;
        let minutes = 0;

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                } else if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        let head = 0;

        while (head < queue.length && fresh > 0) {
            const levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const [row, col] = queue[head++];

                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                        queue.push([nr, nc]);
                        grid[nr][nc] = 2;
                        fresh--;
                    }
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
