class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") {
                return;
            }

            board[r][c] = "S"; // safe

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        // 1. Mark border-connected O's as safe
        for (let r = 0; r < rows; r++) {
            dfs(r, 0); // left border
            dfs(r, cols - 1); // right border
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c);
            dfs(rows - 1, c);
        }

        // 2. Flip surrounded O's, restore safe O's
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                } else if (board[r][c] === "S") {
                    board[r][c] = "O";
                }
            }
        }
    }
}
