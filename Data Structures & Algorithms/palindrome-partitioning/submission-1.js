class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
            const result = [];
            const path = [];

            function isPalindrome(str, l, r) {
                while (l < r) {
                    if (str[l] !== str[r]) return false;
                    l++;
                    r--;
                }
                return true;
            }

            function dfs(start) {
                if (start === s.length) {
                    result.push([...path]);
                    return;
                }

                for (let end = start; end < s.length; end++) {
                    if (isPalindrome(s, start, end)) {
                        path.push(s.slice(start, end + 1));

                        dfs(end + 1);

                        path.pop();
                    }
                }
            }

            dfs(0);
            return result;
        };
    }

