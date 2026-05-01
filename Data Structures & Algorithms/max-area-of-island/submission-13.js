class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    // BFS
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function bfs(r, c) {
            let queue = [[r, c]];
            let head = 0;
            grid[r][c] = 0;
            let area = 0;

            while (head < queue.length) {
                const [row, col] = queue[head++];
                area++;

                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                        grid[nr][nc] = 0;
                        queue.push([nr, nc]);
                    }
                }
            }

            return area; 
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    let area = bfs(r, c);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea; 
    }
}
