class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const inDegree = Array(n + 1).fill(0); 
        const outDegree = Array(n + 1).fill(0); 

        for (const [a, b] of trust) {
            outDegree[a]++;
            inDegree[b]++; 
        }

        for (let person = 1; person <= n; person++) {
            if (inDegree[person] === n - 1 && outDegree[person] === 0) {
                return person; 
            }
        }

        return -1; 
    }
}
