class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Map<number, number>();
        let found = false;

        for (const n of nums) {
            if(seen.has(n)) {
                found = true;
                break;
            }

            seen.set(n, n);
        } 

        return found;
    }
}
