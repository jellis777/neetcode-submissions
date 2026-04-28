class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    // BFS
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function bfs(r, c) {
           let queue = [[r, c]];
            grid[r][c] = "0";

            while (queue.length) {
                const [row, col] = queue.pop();

                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === "1") {
                        queue.push([nr, nc]);
                        grid[nr][nc] = "0";
                    }
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    islands++;
                    bfs(r, c);
                }
            }
        }
        return islands;
    }
}
