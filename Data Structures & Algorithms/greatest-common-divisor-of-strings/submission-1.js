class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1, str2) {
        if (str1 + str2 !== str2 + str1) return ""; 

        const length = this.gcd(str1.length, str2.length); 

        return str1.slice(0, length); 
    }

    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a; 
    }
}
