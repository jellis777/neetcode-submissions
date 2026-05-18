class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trustee = Array(n + 1).fill(0);
        const trusted = Array(n + 1).fill(0); 

        for (const [a, b] of trust) {
            trusted[b]++;
            trustee[a]++;
        }

        for (let person = 1; person <= n; person++) {
            if (trusted[person] === n - 1 && trustee[person] === 0) {
                return person; 
            }
        }

        return -1; 
    }
}
