class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let fresh = 0;
        let minutes = 0;

        let queue = [];
        let head = 0;

        const directions = [
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

        while (head < queue.length && fresh > 0) {
            let levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const [row, col] = queue[head++];
                

                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                        queue.push([nr, nc]);
                        fresh--;
                        grid[nr][nc] = 2; 
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1; 
    }
}
