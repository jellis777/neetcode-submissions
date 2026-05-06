class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     
     RULES: - Each child is given at most one cookie
            -  s[j] >= g[i]
    
    RETURN amount of children that are content; 
    - Map {}

     */
    findContentChildren(g, s) {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a- b); 

        let child = 0;
        let cookie = 0; 

        while (child < g.length && cookie < s.length) {
            if (s[cookie] >= g[child]) {
                child++;
            }

            cookie++; 
        }

        return child; 
    }
}
