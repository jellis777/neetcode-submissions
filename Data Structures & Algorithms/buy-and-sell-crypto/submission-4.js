class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = -Infinity;

        for (let price of prices) {
            minPrice = Math.min(minPrice, price); 
            maxProfit = Math.max(maxProfit, price - minPrice); 
        }

        return maxProfit; 
    }
}
