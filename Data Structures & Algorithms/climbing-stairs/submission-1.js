class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        let one = 1; // ways to reach step 1
        let two = 2; // ways to reach step 2

        for (let i = 3; i <= n; i++) {
            let temp = one + two;
            one = two;
            two = temp;
        }

        return two;
    }
}
