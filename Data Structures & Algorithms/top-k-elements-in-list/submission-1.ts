class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const seen = new Map<number, number>();
        for (const n of nums) {
            seen.set(n, (seen.get(n) ?? 0) + 1)
        }
        
        const freq: number[][] = Array.from({length: nums.length + 1}, () => []);
        for (const [n, c] of seen.entries()) {
            freq[c].push(n);
        }

        const mostFreq: number[] = [];
        for (let i=freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                mostFreq.push(n);
                if(mostFreq.length >= k) return mostFreq;
            }
        }

        return [];
    }
}
