class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0; 

        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i]  < prices[i + 1]) {
                maxProfit += prices[i + 1] - prices[i]
            }
        }

        return maxProfit; 
    }
}
