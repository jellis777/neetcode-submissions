class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
        const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r, c, visited, prevHeight) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                visited[r][c] ||
                heights[r][c] < prevHeight
            ) {
                return;
            }

            visited[r][c] = true;

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, visited, heights[r][c]);
            }
        };

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(rows - 1, c, atlantic, heights[rows -1][c]);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
        }

        const result = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result; 
    }
}
