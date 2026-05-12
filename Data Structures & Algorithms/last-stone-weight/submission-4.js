class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a,b) => b -a); 

        while (stones.length > 1) {
            let first = stones.shift();
            let second = stones.shift(); 

            if (first !== second) {
                let newStone = first - second; 
                stones.push(newStone);
                stones.sort((a, b) => b - a); 
            }
        } 

        return stones.length !== 0 ? stones[0] : 0; 
    }
}
