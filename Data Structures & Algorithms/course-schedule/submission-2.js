class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    // DFS
    canFinish(numCourses, prerequisites) {
        const graph = {}; 

        // number of courses
        for (let i = 0; i < numCourses; i++) {
            graph[i] = []; 
        }

        // Add prereq for each course
        for (let [course, prereq] of prerequisites) {
            graph[course].push(prereq)
        }

        const visiting = new Set();
        const visited = new Set(); 

        function dfs(course) {
            if (visiting.has(course)) {
                return false; 
            }

            if (visited.has(course)) {
                return true;
            }

            visiting.add(course); 

            for (let prereq of graph[course]) {
                if (!dfs(prereq)) {
                    return false;
                }
            }

            visiting.delete(course);
            visited.add(course); 

            return true; 
        }

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) {
                return false; 
            }
        }

        return true; 
    }
}
