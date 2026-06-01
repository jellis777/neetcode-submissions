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

        const queue = ["0000"];
        let head = 0;

        const visited = new Set(["0000"]);

        let minTurns = 0;
        while (head < queue.length) {
            let levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const code = queue[head++];
                if (code === target) {
                    return minTurns;
                }

                for (let next of this.getNeighbors(code)) {
                    if (!dead.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next)
                    }
                }
            }
            minTurns++; 
        }

        return -1; 
    }

    getNeighbors(code) {
        const result = [];

        for (let i = 0; i < 4; i++) {
            let digit = Number(code[i])

            let up = (digit + 1) % 10;
            let down = (digit + 9) % 10; 

            result.push(code.slice(0, i) + up + code.slice(i + 1))
            result.push(code.slice(0, i) + down + code.slice(i + 1))

        }

        return result; 
    }
}

/**
 * INPUT: []string -> deadends
 *        string -> target
 *  OUTPUT: int -> MINIMUM total number of turns(minTurns) required to open the lock  ||  -1 if impossible
 * 
 *  CONSTRAINTS: 1 <= deadends.length <= 500
 *               deadends[i].length == 4; 
 *                 target.length === 4; 
 *                 deadends will not contain target
 *               Each target and deadends[i] will contain digits in a string
 * 
 * EDGE CASES: Trapped by deadends and therefore can't get to target 
 *                  - Input: deadends = ["4443","4445","4434","4454","4344","4544","3444","5444"], target = "4444"
                                Output: -1
               - Deadends could contain "OOOO" return -1; 
               - Taget could equal "0000" return 0; 

    INITIAL APPROACH:  use BFS for shortest path (or minTurns)
        - Create a set for deadends to keep track
        -  Start with "0000" in a queue; 
        -  Need to keep track of combinations visited -> create new set (visited) ["0000"]
        - let minTurns = 0; 
        - get levelSize from length of  queue
        - IF code === target RETURN turns; 
        - have a helper function that gets all the neighbors of the current code
        - if the deadlocks don't have that neighbor and aren't visited
                -visit it 
                - add to queue
        - increment turns
        - return -1; 
        
 * 
 */
