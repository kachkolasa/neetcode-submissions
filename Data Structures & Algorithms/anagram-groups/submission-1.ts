class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // First solution that came to my mind, and I know using sort and includes are not the best options here and it's seriously inefficient. Going to think through this more and submit more solutions.

        let remainingWords = strs;
        let results: string[][] = [];

        for (const word of strs) {
            const arr = remainingWords.filter((w: string) => {
                return w.trim().split('').sort().join('') === word.trim().split('').sort().join('')
            });

            if(! arr.length) continue;

            results.push(arr);
            remainingWords = remainingWords.filter(w => !arr.includes(w));
        }

        return results;
    }
}
