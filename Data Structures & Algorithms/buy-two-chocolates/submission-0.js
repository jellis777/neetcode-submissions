class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let min1 = Infinity;
        let min2 = Infinity;

        for (let price of prices) {
            if (price < min1) {
                min2 = min1;
                min1 = price;
            } else if (price < min2) {
                min2 = price;
            }
        }

        const total = min1 + min2;

        if (total > money) {
            return money;
        }

        return money - total; 
    }
}
