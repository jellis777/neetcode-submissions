class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0,
            right = 0;
        let maxProfit = 0; 
        
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit); 
            }  else {
                left = right; 
            }

            right++; 
        }

        return maxProfit; 
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
        - Find minimum and maximum with Math.min and Math.max while iterating over prices
        - return max - min  

            Time: O(n)
            Space: O(1)

 ALTERNATIVE APPROACH:
        - Use pointers left = 0 and right = 1;  maxProfit = 0; 
        - while (right < prices.length) 
                - IF prices[left] < prices[right] 
                    - profit = prices[right] - prices[left]
                    -  maxProfit = Math.max(maxProfit, profit)
                - ELSE left = right
                - right++;
        - return maxProfit;

        Time: O(n)
        Space: O(1)
        
 */
