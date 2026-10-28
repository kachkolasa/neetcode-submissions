class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let output: number[] = [];

        nums.forEach((n: number, i: number) => {
            const newNums = [...nums];
            newNums.splice(i, 1);
            
            const res: number = newNums.reduce((a: number, c: number) => a * c, 1);

            output.push(res);
        });

        return output;
    }
}
