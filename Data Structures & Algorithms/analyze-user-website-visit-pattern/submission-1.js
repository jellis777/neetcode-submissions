class Solution {
    /**
     * @param {string[]} username
     * @param {number[]} timestamp
     * @param {string[]} website
     * @return {string[]}
     */
    mostVisitedPattern(username, timestamp, website) {
        const visits = [];

        for (let i = 0; i < username.length; i++) {
            visits.push([timestamp[i], username[i], website[i]]);
        }

        visits.sort((a, b) => a[0] - b[0]);

        const userToSites = {};

        for (let [time, user, site] of visits) {
            if (!userToSites[user]) {
                userToSites[user] = [];
            }

            userToSites[user].push(site);
        }

        const patternCount = {};

        for (let user in userToSites) {
            const sites = userToSites[user];
            const seen = new Set();

            for (let i = 0; i < sites.length; i++) {
                for (let j = i + 1; j < sites.length; j++) {
                    for (let k = j + 1; k < sites.length; k++) {
                        const pattern = [sites[i], sites[j], sites[k]].join("#");
                        seen.add(pattern);
                    }
                }
            }

            for (let pattern of seen) {
                patternCount[pattern] = (patternCount[pattern] || 0) + 1;
            }
        }

        let bestPattern = "";
        let bestCount = 0;

        for (let pattern in patternCount) {
            const count = patternCount[pattern];

            if (count > bestCount || (count === bestCount && pattern < bestPattern)) {
                bestCount = count;
                bestPattern = pattern;
            }
        }

        return bestPattern.split("#")
    }
}

/**
 INPUT: []string -> username
        []int    -> timestamp
        []string -> website 

 OUTPUT: []string  ->  the pattern (a list of three websites) with the largest score of visits
                        ** IF tied, return the lexicographically smallest 

 CONSTRAINTS: 
- 1 <= username.length == timestamp.length == website.length <= 50
- 1 <= username[i].length <= 10
- 1 <= timestamp[i] <= 1,000,000,000
- 1 <= website[i].length <= 10
- username[i] and website[i] is made up of lowercase English letters.
- It is guaranteed that there is at least one user who visited at least three websites.
- All the tuples (username[i], timestamp[i], website[i]) are unique.

EDGE CASES: 
    - 


INITIAL APPROACH:  


 */
