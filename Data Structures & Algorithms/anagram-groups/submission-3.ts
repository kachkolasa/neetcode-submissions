class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // After looking at some hints. The idea is no comparison at all and instead using hash maps. Attempt 3rd, no full research yet.
        const seen = new Map<string, string[]>();

        for (const w of strs) {
            // Still using sort which bugs me
            const sortedWord = w.split('').sort().join('');
            if(seen.has(sortedWord)) {
                const arr = seen.get(sortedWord);
                arr.push(w);
                seen.set(sortedWord, arr);
                continue;
            }

            seen.set(sortedWord, [w]);
        }

        // Appearently this is the best logical solution, but I still want to solve this without using any sort(), and hint 3 suggests using letters index to sort the word, trying that in the solution 4.
        return Array.from(seen.values());
    }
}
