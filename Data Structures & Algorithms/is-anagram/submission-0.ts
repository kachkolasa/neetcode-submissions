class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        
        const count = new Map<string, number>();
        for (const c of s) {
            count.set(c, (count.get(c) ?? 0) + 1);
        }

        for (const c of t) {
            const remaining = count.get(c);
            if(! remaining) return false;
            count.set(c, remaining - 1);
        }

        return true;
    }
}
