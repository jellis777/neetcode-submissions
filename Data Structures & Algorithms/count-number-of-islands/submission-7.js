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
            [1, 0], // down
            [-1, 0], // up
            [0, 1], // right
            [0, -1], // left
        ];

        function bfs(r, c) {
            const queue = [[r, c]];
            grid[r][c] == "0"; // mark visited

            while (queue.length) {
                const [row, col] = queue.shift();

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
                if (grid[r][c] === '1') {
                    islands++;
                    bfs(r, c); 
                }
            }
        }

        return islands;
    }
}
