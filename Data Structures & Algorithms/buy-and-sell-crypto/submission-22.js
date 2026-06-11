class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /**
         * Observations:
         * - Sell day must happen AFTER buy day
         * - We want the maximum profit difference
         * - If we discover a lower buying price.
         *      previous higher buying prices become useless
         */
        let buy = Infinity;
        let profit = - Infinity;

        for (let price of prices) {
            buy = Math.min(price, buy);
            profit = Math.max(profit, price - buy)
        }

        return profit; 
    }
}

/**
  INPUT: []int -> prices
  OUTPUT: int -> maxProfit achieved
  RULES: 
        - Buy one day and sell another day in the future
        - You can choose to not make any transactions, then return 0;

 CONSTRAINTS: 
        -   1 <= prices.length <= 100
        -   0 <= prices[i] <= 100

 EDGE CASES: 
        - [10]  -> not able to sell( has to be in the future)  RETURN 0
        - [10, 11, 15] -> multiple profits, choose max RETURN 5
        - [10, 9, 6, 4] -> always decreases RETURN 0


 INITIAL APPROACH:
        - Find minimum  buying price and maximumProfit with Math.min and Math.max while iterating over prices
        - return max - min  

            Time: O(n)
            Space: O(1)

 ALTERNATIVE APPROACH:
        - Use pointers buy = 0 and sell = 1;  maxProfit = 0; 
        - while (sell < prices.length) 
                - IF prices[buy] < prices[sell] 
                    - profit = prices[sell] - prices[buy]
                    -  maxProfit = Math.max(maxProfit, profit)
                - ELSE buy = sell
                - sell++;
        - return maxProfit;

        Time: O(n)
        Space: O(1)
        
 */
