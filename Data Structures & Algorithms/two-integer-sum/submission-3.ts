class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (const [i, v] of nums.entries()) {
            const remains = target - v;
            if(seen.has(remains)) {
                return [seen.get(remains), i];
            }

            seen.set(v, i);
        }
    }
}
