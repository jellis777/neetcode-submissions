class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Turn into max heap using sort
        stones.sort((a, b) => b - a)

        while (stones.length > 1) {
            let first = stones.shift(); // largest
            let second = stones.shift(); // second largest

            if (first !== second) {
                let newStone = first - second; 
                stones.push(newStone);
                stones.sort((a, b) => b - a) // re -sort; 
            }
        }

        return stones.length ? stones[0] : 0; 
    }
}
