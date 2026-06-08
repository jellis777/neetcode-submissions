class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for (let i = 0; i < flowerbed.length; i++) {
            const leftEmpty = i === 0 || flowerbed[i - 1] === 0;

            const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (flowerbed[i] === 0 && leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n--;

                if (n === 0) {
                    return true;
                }
            }
        }

        return n <= 0; 
    }
}

/**
  INPUT: []int -> flowerbed
        int  ->  n  (amount of flowers to plan)

  OUTPUT: boolean  -> True if n can be planted

  CONSTRAINTS:  -  NO ADJACENT FLOWERS ALLOWED
                - 1 <= flowerbed.length <= 20,000
                - 0 <= n <= flowerbed.length; 
                - flowerbed[i] is 0 or 1

  EDGE CASES: - flowerbed = [0]  n = 1   -> true
            -     [0, 0, 0, 1]  n = 2  -> false
            -   [0, 1, 0, 1, 0]  n = 1  -> false  

  INITIAL APPROACH: - Iterate through flowerbed
                        - Flower can be planted only if:
                            - flowerbed[i] === 0
                            AND
                            left neighbor is empty/out of bounds
                            right neighbor is empty/out of bounds
                        - If valid:
                            - plant flower
                            - decrement n
                        - If n === 0 return true; 

                Time: O(n);
                Space: O(1);
                                 
 */
