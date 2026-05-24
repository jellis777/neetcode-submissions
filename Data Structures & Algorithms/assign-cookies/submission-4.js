class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     
     Input: g = [2,3, 1], s = [1,2]
     Output: 1
    g [1, 2, 3] s [1, 2]      return     2
          i              j

    g=[10,9,8,7]        s=[5,6,7,8]  
       [7, 8, 9, 10]        [5,6,7,8]  
        

     */
    findContentChildren(g, s) {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a -b); 
        let i = 0;
        let j = 0;
        let contentChildren = 0; 

        while (i < g.length && j < s.length) {
            if (g[i] <= s[j]) {
                j++;
                i++
                contentChildren++;
            } else {
                j++
            }
        }

        return contentChildren; 
    }
}

/**
 CLARIFY/EXAMPLES:
    - Input: []int -> g (greed of children); []int -> s (size of cookies)
    - Output: int -> maximum number of content children
    - Constraints: Use only constant extra space; Is there an optimal time or space you are looking for
    - Edge Cases: s = [] -> 0 content children
                  g = [1, 1, 1]  s= [2, 3]  -> 2 


  NAIVE SOLUTION:
    - Nested loop - comparing g[i] with s[j] 
    Time: O(n^2)
    Space: O(1)


  OPTIMAL PATTERN: Sort and compare with one iteration
    


  PSEUDO CODE / PLAN:
    - sort g and s
    - contentChildren = 0
    - while loop ;pointers i and j; while (j < s.length && i < g.length)
    - IF s[j] >= g[i] then j++ and contentChildren++; ELSE i++; 
    - return contentChildren; 

    Time: O(n log n); 
    Space: O(1); 


    

 */
