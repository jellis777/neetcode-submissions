class Solution {
   /*
    I/O: 
    -Input: emails: string[];
    -Output: number of unique email addresses

    RULES:
    -Split at '@'
    -In local name:
        -ignore '.'
        -ignore everything after first '+'
    - Domain stays unchanged

    Edge cases:
    - local has dots only between characters
    - local has +
    -local has both dot and plus
    -same local but different domain -> different email

    Optimal:
    - Normalize each email
    - Add to Set
    - Return Set size
   */

    numUniqueEmails(emails) {
        const unique = new Set(); 

        for (let email of emails) {
            const [local, domain] = email.split('@'); 

            const cleanLocal = local
                .split("+")[0]
                .replaceAll(".", "");


            unique.add(cleanLocal + '@' + domain);
        }

        return unique.size; 
    }
}
