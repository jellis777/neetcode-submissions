class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const counts = new Array(26).fill(0);

        for (let task of tasks) {
            counts[task.charCodeAt(0) - 65]++;
        }

        counts.sort((a, b) => b - a);

        const maxFreq = counts[0];
        let maxCount = 0;

        for (let c of counts) {
            if (c === maxFreq) maxCount++;
        }

        const emptySlotsFormula = (maxFreq - 1) * (n + 1) + maxCount;

        return Math.max(tasks.length, emptySlotsFormula);
    }
}
