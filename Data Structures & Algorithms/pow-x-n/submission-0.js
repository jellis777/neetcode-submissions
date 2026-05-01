class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        // Handle negative exponent
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        function fastPow(x , n) {
            if (n === 0) return 1;

            let half = fastPow(x, Math.floor(n / 2));

            if (n % 2 === 0) { 
                return half * half;
            } else {
                return x * half * half;
            }
        }

        return fastPow(x, n); 
    }
}
