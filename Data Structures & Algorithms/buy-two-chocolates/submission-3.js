class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let res = -1;

        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[i] + prices[j] <= money) {
                    res = Math.max(res, money - prices[i] - prices[j])
                }
            }
        }

        return res === -1 ? money : res; 
    }
}
