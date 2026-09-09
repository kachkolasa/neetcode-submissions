class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Blind Attempt - no research yet

        const seen = new Map<number, number>();

        for (const n of nums) {
            const s: number = (seen.get(n) ?? 0) + 1;
            seen.set(n, s);
        }

        return Array.from(seen).sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => num);
    }
}
