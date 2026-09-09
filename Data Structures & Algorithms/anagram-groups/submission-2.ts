class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Another way to solve this without using sort but still the same thing nonetheless, runtime issues in it (no research just yet)

        const completedLengths = new Set<number>();
        const anagrams = [];

        for (const word of strs) {
            if(completedLengths.has(word.length)) {
                continue;
            }
            completedLengths.add(word.length);

            let sameLenWords = strs.filter((w) => w.length === word.length);

            while(sameLenWords.length) {
                const firstWord = sameLenWords[0];
                const anagram = [firstWord];
                sameLenWords.shift();

                for (const w of sameLenWords) {
                    const isAnagram = this.isAnagram(firstWord, w);
                    if(isAnagram) {
                        anagram.push(w);
                    }
                }

                anagrams.push(Array.from(anagram));
                sameLenWords = sameLenWords.filter(x => !anagram.includes(x));
            }
        }

        return anagrams;
    }

    isAnagram(x: string, y: string): boolean {
        const count = new Map<string, number>();
        for (const c of x) {
            count.set(c, (count.get(c) ?? 0) + 1)
        }

        for (const c of y) {
            const n = count.get(c);
            if(!n) return false;
            count.set(c, n - 1);
        }

        return true;
    }
}
