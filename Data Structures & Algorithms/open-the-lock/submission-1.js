class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const dead = new Set(deadends);

        if (dead.has("0000")) return -1;
        if (target === "0000") return 0;

        const visited = new Set(["0000"]);
        const queue = ["0000"];
        let head = 0;
        let turns = 0;

        while (head < queue.length) {
            const levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const code = queue[head++];

                if (code === target) return turns;

                for (let next of this.getNeighbors(code)) {
                    if (!dead.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next);
                    }
                }
            }

            turns++;
        }

        return -1;
    }

    getNeighbors(code) {
        const result = [];

        for (let i = 0; i < 4; i++) {
            const digit = Number(code[i]);

            const up = (digit + 1) % 10; 
            const down = (digit + 9) % 10;

            result.push(code.slice(0, i) + up +  code.slice(i + 1)); 
            result.push(code.slice(0, i) + down + code.slice(i + 1))
        }

        return result ; 
    
    }
}
