class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Researched version - sort() works as well (the previous solution) but I wanted to try another solution where we don't use the traditional sort(), so after some digging, I found a way to create the key using the letters index. The logic is exact same as solution 3 except the sort is working differently here.

        const seen = new Map<string, string[]>();

        for (const w of strs) {
            const sorted = this.sortedIndex(w);

            if(seen.has(sorted)){
                const arr = seen.get(sorted);
                arr.push(w);
                seen.set(sorted, arr);

                continue;
            }

            seen.set(sorted, [w]);
        }

        return Array.from(seen.values());
    }

    sortedIndex(str: string): string {
        const counts = new Array(26).fill(0);

        for (const c of str) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            counts[index] = counts[index] + 1;
        }

        return counts.join(',');
    }
}
