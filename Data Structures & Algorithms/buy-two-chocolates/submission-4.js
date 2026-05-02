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
                    let total = prices[i] + prices[j]
                    res = Math.max(res, money - total)
                }
            }
        }

        return res === -1 ? money : res; 
    }
}
