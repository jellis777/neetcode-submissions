class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        hand.sort((a, b) => a - b); 

        const count = {};

        for (const card of hand) {
            count[card] = (count[card] || 0) + 1;
        }

        for (const card of hand) {
            if (count[card] === 0) continue; 

            for (let next = card; next < card + groupSize; next++) {
                if (!count[next]) {
                    return false; 
                }
                count[next]--; 
            }
        }

        return true; 
    }
}
