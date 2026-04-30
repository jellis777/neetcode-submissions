class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let maxArea = 0;

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            let area = 1;

            area += dfs(r + 1, c);
            area += dfs(r - 1, c);
            area += dfs(r, c + 1);
            area += dfs(r, c - 1);

            return area;
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    let area = dfs(r, c);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea; 
    }
}
